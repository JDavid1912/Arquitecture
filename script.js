// Performance: Precomputed lookup table for 8-bit binary representation of characters 0-255
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));
// Performance: Reverse lookup table for 8-bit binary strings to characters
const REVERSE_LOOKUP = BINARY_LOOKUP.reduce((acc, bin, i) => {
  acc[bin] = String.fromCharCode(i);
  return acc;
}, {});

/**
 * Converts text input to binary representation.
 * Optimization: Uses a lookup table and Array.join for O(n) performance.
 */
function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  // Performance: Pre-allocate array to avoid dynamic resizing during conversion
  const resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Performance: Bitmask with 0xFF ensures index is within 0-255 for the lookup table.
    // charCodeAt is faster than iterating over characters for large strings.
    resultado[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  // Performance: join(' ') is significantly faster than string concatenation in a loop
  const finalResult = resultado.join(' ');
  // Performance: textContent is faster than innerHTML as it skips the HTML parser
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

/**
 * Converts binary string input back to characters.
 * Optimization: Uses a reverse lookup table and Array.join for O(n) performance.
 */
function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  // Performance: Pre-allocate array based on expected character count (1 char per 8 bits)
  const resultLen = Math.ceil(len / 8);
  const result = new Array(resultLen);

  for (let i = 0; i < len; i += 8) {
    // Performance: Lookup is faster than parseInt for 8-bit segments
    const byte = binario.substring(i, i + 8);
    result[i / 8] = REVERSE_LOOKUP[byte] || '';
  }

  const finalResult = result.join('');
  // Performance: textContent is faster than innerHTML as it skips the HTML parser
  document.getElementById("bin1").textContent = "El carácter es " + finalResult;
  console.log(finalResult);
}

/**
 * Converts a single binary byte input to its character representation.
 * Optimization: Uses textContent for DOM updates.
 */
function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  // Performance: textContent is faster than innerHTML
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
