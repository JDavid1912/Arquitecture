// Precompute binary lookup table for performance: maps 0-255 to 8-bit binary strings
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

// Precompute reverse lookup for decoding performance: maps 8-bit binary strings to characters
const CHAR_LOOKUP = {};
BINARY_LOOKUP.forEach((bin, i) => {
  CHAR_LOOKUP[bin] = String.fromCharCode(i);
});

/**
 * Converts text to binary representation.
 * Optimized with lookup table and Array.join to avoid O(n^2) string concatenation.
 */
function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;
  // Pre-allocate array for better performance with large strings
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    // Original logic effectively used the lower 8 bits of the character code
    const charCode = input.charCodeAt(i) & 0xFF;
    result[i] = BINARY_LOOKUP[charCode];
  }

  const finalResult = result.join(' ');
  // Use textContent instead of innerHTML for better performance and security
  const outputElement = document.getElementById("bin");
  if (outputElement) {
    outputElement.textContent = "El número binario es " + finalResult;
  }
  console.log(finalResult);
}

/**
 * Converts binary string to characters.
 * Optimized with reverse lookup table and substring processing.
 */
function mostrarBinario1() {
  const inputElement = document.getElementById("binario1");
  if (!inputElement) return;

  const binario = inputElement.value;
  const len = binario.length;
  let caracteres = '';

  // Processing 8 bits at a time using the lookup table
  for (let i = 0; i < len; i += 8) {
    const byte = binario.substring(i, i + 8);
    // Use lookup table if the byte is exactly 8 bits for maximum speed
    if (byte.length === 8 && CHAR_LOOKUP[byte]) {
      caracteres += CHAR_LOOKUP[byte];
    } else if (byte.length > 0) {
      // Fallback for short bytes at the end of the string
      caracteres += String.fromCharCode(parseInt(byte, 2));
    }
  }

  const outputElement = document.getElementById("bin1");
  if (outputElement) {
    outputElement.textContent = "El carácter es " + caracteres;
  }
  console.log(caracteres);
}

/**
 * Converts a single binary number to its character representation.
 */
function mostrarCaracter() {
  const binario = document.getElementById("caracter").value;
  if (!binario) return;

  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);

  const outputElement = document.getElementById("bin1");
  if (outputElement) {
    outputElement.textContent = "El carácter es " + caracter;
  }
}
