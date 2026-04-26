// Precomputed lookup table for 8-bit binary strings to avoid repeated calculations
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Converts the input string to its binary representation (8-bit per character).
 * Optimization: Uses a lookup table and Array.join for O(n) performance.
 */
function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;

  // Pre-allocating the array is faster for large inputs
  const resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmask with 0xFF to ensure we stay within the 0-255 range for the lookup table
    resultado[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  const finalString = resultado.join(' ');

  // textContent is faster and more secure than innerHTML
  document.getElementById("bin").textContent = "El número binario es " + finalString;
  console.log(finalString);
}

function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  let caracteres = '';

  for (let i = 0; i < binario.length; i += 8) {
    let byte = binario.substring(i, i + 8);
    let charCode = parseInt(byte, 2);

    caracteres += String.fromCharCode(charCode);
  }

  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter() {
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
