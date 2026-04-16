// Lookup table for ASCII characters (0-255) to avoid repeated bitwise calculations
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;
  // Use an array to collect results and join at the end to avoid O(n^2) string concatenation
  const resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    const code = input.charCodeAt(i);
    // Use lookup table for standard ASCII, fallback to toString(2) for others
    resultado[i] = code < 256 ? BINARY_LOOKUP[code] : code.toString(2).padStart(8, '0');
  }

  const finalResult = resultado.join(' ');
  // Use textContent instead of innerHTML for better performance and security
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarCaracter() {
  const binario = document.getElementById("caracter").value.replace(/\s/g, '');
  let caracteres = '';

  for (let i = 0; i < binario.length; i += 8) {
    const byte = binario.substring(i, i + 8);
    const charCode = parseInt(byte, 2);
    if (!isNaN(charCode)) {
      caracteres += String.fromCharCode(charCode);
    }
  }

  // Use textContent instead of innerHTML for better performance and security
  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}
