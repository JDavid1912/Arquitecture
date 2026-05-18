// Precomputed 256-entry lookup table for 8-bit binary strings (0-255).
// This avoids repeated bitwise operations and string conversions during processing.
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Converts input text to binary representation.
 * Optimization: Uses a precomputed lookup table and Array.join for O(n) performance,
 * avoiding the O(n^2) overhead of string concatenation in a loop.
 */
function mostrarBinario(){
  let input = document.getElementById("binario").value;
  let len = input.length;

  // Pre-allocating an array is more efficient than repeated string concatenation.
  let resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Masking with 0xFF ensures we stay within the 0-255 range for the lookup table.
    // This handles standard 8-bit character conversion as per the original logic.
    resultado[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  // join(' ') is highly optimized in modern JS engines for bulk string construction.
  const finalResult = resultado.join(' ');

  // textContent is faster than innerHTML and prevents potential XSS when displaying user input.
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  // console.log(finalResult); // Removed to avoid performance bottleneck during large string processing
}

function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  let caracteres = '';

  for (let i = 0; i < binario.length; i += 8) {
    let byte = binario.substr(i, 8);
    let charCode = 0;

    for (let j = 0; j < byte.length; j++) {
      charCode = charCode * 2 + (byte[j] === '1' ? 1 : 0);
    }

    caracteres += String.fromCharCode(charCode);
  }

  document.getElementById("bin1").innerHTML = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").innerHTML = "El carácter es " + caracter;
}
