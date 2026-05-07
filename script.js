// Precomputed binary lookup table for performance (0-255)
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Converts input text to binary string representation.
 * Optimized with lookup table and Array.join to avoid O(n^2) string concatenation.
 */
function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmask with 0xFF ensures we handle standard 8-bit characters efficiently
    resultArr[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  const resultado = resultArr.join(' ');

  // Use textContent instead of innerHTML for better performance and security
  document.getElementById("bin").textContent = "El número binario es " + resultado;
  console.log(resultado);
}

/**
 * Converts binary string back to characters.
 * Optimized to use parseInt and handles multiple bytes.
 */
function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  let caracteres = '';

  for (let i = 0; i < binario.length; i += 8) {
    const byte = binario.substring(i, i + 8);
    if (byte.length === 0) break;

    const charCode = parseInt(byte, 2);
    caracteres += String.fromCharCode(charCode);
  }

  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

/**
 * Converts a single binary number to its character representation.
 */
function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
