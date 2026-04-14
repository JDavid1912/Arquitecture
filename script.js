// Precomputed lookup table for byte-to-binary mapping (0-255)
// This avoids repeated bitwise operations and string concatenations in loops.
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    const charCode = input.charCodeAt(i);
    // Use lookup table for standard ASCII, fallback to toString(2) for others
    result[i] = charCode < 256 ? BINARY_LOOKUP[charCode] : charCode.toString(2).padStart(8, '0');
  }

  const resultado = result.join(' ');
  // Use textContent instead of innerHTML for better performance and security
  document.getElementById("bin").textContent = "El número binario es " + resultado;
  console.log(resultado);
}

function mostrarBinario1() {
  const binarioInput = document.getElementById("binario1");
  if (!binarioInput) return;
  const binario = binarioInput.value;
  let caracteres = '';

  for (let i = 0; i < binario.length; i += 8) {
    const byte = binario.substr(i, 8);
    let charCode = 0;

    for (let j = 0; j < byte.length; j++) {
      charCode = charCode * 2 + (byte[j] === '1' ? 1 : 0);
    }

    caracteres += String.fromCharCode(charCode);
  }

  const output = document.getElementById("bin1");
  if (output) {
    output.textContent = "El carácter es " + caracteres;
  }
  console.log(caracteres);
}

function mostrarCaracter() {
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  // Use textContent instead of innerHTML for better performance and security
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
