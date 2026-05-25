// Precompute lookup tables for performance
const BINARY_TABLE = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));
const REVERSE_BINARY_TABLE = Object.fromEntries(BINARY_TABLE.map((bin, i) => [bin, String.fromCharCode(i)]));

/**
 * Converts text input to a space-separated binary string.
 * Optimization: Uses a precomputed lookup table and Array.join() for O(n) performance.
 */
function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmasking with 0xFF ensures we stay within the 0-255 range for the lookup table.
    // This matches the original behavior of only processing the lower 8 bits.
    result[i] = BINARY_TABLE[input.charCodeAt(i) & 0xFF];
  }

  const finalResult = result.join(' ');
  // textContent is faster and safer than innerHTML as we are not injecting any HTML.
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

/**
 * Converts a binary string to text characters.
 * Optimization: Uses a precomputed reverse lookup table and processes in 8-bit chunks.
 */
function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  const result = [];

  for (let i = 0; i < len; i += 8) {
    const byte = binario.slice(i, i + 8);
    // Use lookup table for full 8-bit bytes, fallback to parseInt for incomplete chunks.
    if (byte.length === 8) {
      result.push(REVERSE_BINARY_TABLE[byte] || String.fromCharCode(parseInt(byte, 2)));
    } else {
      result.push(String.fromCharCode(parseInt(byte, 2)));
    }
  }

  const caracteres = result.join('');
  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

/**
 * Converts a single binary number to a character.
 */
function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
