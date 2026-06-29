/**
 * Precomputed lookup table for 8-bit binary strings (0-255).
 * Initializing this once avoids redundant bitwise calculations during conversion.
 */
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

/**
 * Converts the input text to its binary representation.
 *
 * Performance optimizations:
 * 1. Uses a precomputed lookup table for O(1) binary string retrieval.
 * 2. Pre-allocates an array and uses Array.join(' ') to avoid O(n^2) string concatenation.
 * 3. Uses textContent instead of innerHTML for faster DOM updates and better security.
 */
function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  const results = new Array(len);

  for (let i = 0; i < len; i++) {
    // We use & 0xFF to ensure we only deal with 8-bit values, matching original behavior for non-ASCII
    const charCode = input.charCodeAt(i) & 0xFF;
    results[i] = binaryLookup[charCode];
  }

  const finalString = results.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + finalString;
  console.log(finalString);
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
