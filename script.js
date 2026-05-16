// Precompute binary lookup table for 8-bit characters (0-255).
// This avoids redundant bitwise calculations and padding during conversion.
const BINARY_TABLE = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Converts the input text to its binary representation.
 * Optimized with a lookup table and Array.join to handle large inputs efficiently.
 */
function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;

  // Pre-allocating the array for better performance with large strings.
  const results = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmasking with 0xFF ensures the charCode is within the 0-255 range for our table.
    const charCode = input.charCodeAt(i) & 0xFF;
    results[i] = BINARY_TABLE[charCode];
  }

  // Using Array.join(' ') is O(n), whereas repeated string concatenation is O(n^2) in many JS engines.
  const resultado = "El número binario es " + results.join(' ');

  // textContent is faster and more secure than innerHTML for plain text updates.
  document.getElementById("bin").textContent = resultado;
  // Large scale console.log can be a performance bottleneck, omitted here for the hot path.
}

/**
 * Converts binary input to character representation.
 * Optimized to avoid redundant lookups and use faster string methods.
 */
function mostrarBinario1() {
  const binarioInput = document.getElementById("binario1");
  if (!binarioInput) return;

  const binario = binarioInput.value;
  const len = binario.length;
  const resultChars = [];

  for (let i = 0; i < len; i += 8) {
    const byte = binario.substring(i, i + 8);
    const charCode = parseInt(byte, 2);
    if (!isNaN(charCode)) {
      resultChars.push(String.fromCharCode(charCode));
    }
  }

  const resultado = "El carácter es " + resultChars.join('');
  document.getElementById("bin1").textContent = resultado;
}

/**
 * Converts a single binary string to its character representation.
 */
function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  if (isNaN(decimal)) return;
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
