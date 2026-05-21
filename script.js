/**
 * Precomputed 8-bit binary lookup table for performance.
 * Maps character codes (0-255) to their 8-bit binary string representation.
 */
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Precomputed reverse lookup table for binary-to-character conversion.
 * Maps 8-bit binary strings back to their corresponding character.
 */
const REVERSE_BINARY_LOOKUP = {};
BINARY_LOOKUP.forEach((bin, i) => {
  REVERSE_BINARY_LOOKUP[bin] = String.fromCharCode(i);
});

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  // Pre-allocating array for better performance with large strings
  const resultArr = new Array(len);

  // Use precomputed lookup table and bitmask to ensure 8-bit range
  for (let i = 0; i < len; i++) {
    resultArr[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  // Join once at the end to avoid O(n^2) string concatenation
  const finalResult = resultArr.join(' ');

  // Use textContent for better performance and security than innerHTML
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  // Use pre-allocated array for characters
  const resultArr = new Array(Math.ceil(len / 8));
  let count = 0;

  // Process 8-bit segments using reverse lookup table
  for (let i = 0; i < len; i += 8) {
    const byte = binario.substring(i, i + 8);
    if (byte.length === 8) {
      resultArr[count++] = REVERSE_BINARY_LOOKUP[byte] || '';
    } else {
      // Fallback for segments shorter than 8 bits to preserve original behavior
      resultArr[count++] = String.fromCharCode(parseInt(byte, 2));
    }
  }

  const finalResult = resultArr.join('');

  // Use textContent instead of innerHTML
  document.getElementById("bin1").textContent = "El carácter es " + finalResult;
  console.log(finalResult);
}

function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  // parseInt with base 2 is efficient for single character conversion
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);

  // Use textContent instead of innerHTML
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
