// Precomputed lookup table for 8-bit binary strings (0-255)
// This avoids bitwise operations and repeated string padding in the hot path.
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) =>
  i.toString(2).padStart(8, '0')
);

/**
 * Converts a string of characters to their binary representation.
 * Optimization: Uses a precomputed lookup table and Array.join() to avoid
 * O(n*m) complexity and heavy string concatenation.
 */
function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const length = input.length;
  const result = new Array(length);

  // Use precomputed table for O(1) character lookup
  for (let i = 0; i < length; i++) {
    // Only handle 8-bit characters as per original implementation logic
    result[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  // Join once at the end - much faster than += in a loop
  const binaryString = result.join(' ');

  // Use textContent instead of innerHTML for better performance and security
  document.getElementById("bin").textContent = "El número binario es " + binaryString;
  console.log(binaryString);
}

/**
 * Unused in current HTML, but kept for compatibility.
 * Optimized to use parseInt for faster binary to decimal conversion.
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
 * Converts a single binary string to its character representation.
 */
function mostrarCaracter() {
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
