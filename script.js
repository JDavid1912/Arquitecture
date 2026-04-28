// Precomputed lookup table for 8-bit binary strings (0-255)
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Converts the input text to its binary representation.
 * Optimized with a lookup table and Array.join to avoid O(n^2) string concatenation.
 */
function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;
  const resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Mask with 0xFF to ensure the char code is within the 0-255 range
    resultado[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  const finalResult = resultado.join(' ');
  // Use textContent for better performance and security
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

/**
 * Converts a binary string back to characters.
 * Optimized to use parseInt and avoid manual bit manipulation in a loop.
 */
function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  let caracteres = '';

  for (let i = 0; i < binario.length; i += 8) {
    // Use slice instead of deprecated substr
    const byte = binario.slice(i, i + 8);
    if (byte.length === 8) {
      caracteres += String.fromCharCode(parseInt(byte, 2));
    }
  }

  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

/**
 * Converts a single binary sequence to its character representation.
 */
function mostrarCaracter() {
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
