// Precompute a lookup table for 8-bit binary strings (0-255)
// This avoids repeated bitwise operations and string conversions in the hot path.
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;
  // Pre-allocate the array to avoid dynamic resizing for large inputs.
  const resultadoArreglo = new Array(len);

  for (let i = 0; i < len; i++) {
    const charCode = input.charCodeAt(i);
    // Use the lookup table for 8-bit character codes.
    // Bitmasking with 0xFF ensures we stay within the 0-255 range.
    resultadoArreglo[i] = BINARY_LOOKUP[charCode & 0xFF];
  }

  // join(' ') is significantly faster than repeated string concatenation (O(n) vs O(n^2)).
  const resultado = resultadoArreglo.join(' ');
  // textContent is faster than innerHTML and safer against XSS.
  document.getElementById("bin").textContent = "El número binario es " + resultado;
  console.log(resultado);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  let caracteres = '';

  // Optimized binary to text conversion.
  // Using slice instead of the deprecated substr.
  for (let i = 0; i < binario.length; i += 8) {
    const byte = binario.slice(i, i + 8);
    // Native parseInt is generally fast and well-optimized.
    const charCode = parseInt(byte, 2);
    if (!isNaN(charCode)) {
      caracteres += String.fromCharCode(charCode);
    }
  }

  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter() {
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
