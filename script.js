// Precomputed lookup table for character codes 0-255 to 8-bit binary strings
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Converts input text to a space-separated string of 8-bit binary representations.
 * Optimization: Uses a lookup table and Array.join for O(n) performance.
 */
function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    // We use & 0xFF to ensure we stay within the 0-255 range of our lookup table
    result[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  const finalString = result.join(' ');
  // Use textContent instead of innerHTML for better performance and security
  document.getElementById("bin").textContent = "El número binario es " + finalString;
  console.log(finalString);
}

/**
 * Converts a continuous binary string to characters.
 * Optimization: Uses parseInt(byte, 2) and Array.join for O(n) performance.
 */
function mostrarBinario1() {
  const binaryInput = document.getElementById("binario1").value;
  const len = binaryInput.length;
  const result = new Array(Math.ceil(len / 8));
  let resultIdx = 0;

  for (let i = 0; i < len; i += 8) {
    const byte = binaryInput.substring(i, i + 8);
    result[resultIdx++] = String.fromCharCode(parseInt(byte, 2));
  }

  const finalString = result.join('');
  document.getElementById("bin1").textContent = "El carácter es " + finalString;
  console.log(finalString);
}

function mostrarCaracter(){  
  const binaryInput = document.getElementById("caracter").value;
  const decimal = parseInt(binaryInput, 2);
  const character = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + character;
}
