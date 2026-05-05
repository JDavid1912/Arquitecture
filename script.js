// Lookup table for 8-bit binary strings to speed up character to binary conversion
const BYTE_TO_BIN = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Converts input text into its binary representation.
 * Optimized by using a precomputed lookup table and Array.join for efficient string building.
 */
function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  const len = arreglo.length;
  let resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Masking with 0xFF to ensure we stay within the 8-bit lookup table range
    resultado[i] = BYTE_TO_BIN[arreglo.charCodeAt(i) & 0xFF];
  }

  // Join once and reuse for both DOM update and console log
  const resultStr = resultado.join(' ');
  // textContent is safer and faster than innerHTML for plain text updates
  document.getElementById("bin").textContent = "El número binario es " + resultStr;
  console.log(resultStr);
}

/**
 * Converts a continuous binary string into characters.
 * Optimized by using a pre-allocated array and join('') to avoid O(n^2) string concatenation.
 */
function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  const len = binario.length;
  // Use Math.ceil to process trailing bits if the string length is not a multiple of 8
  const resultLen = Math.ceil(len / 8);
  let caracteres = new Array(resultLen);

  for (let i = 0; i < resultLen; i++) {
    let offset = i * 8;
    let charCode = 0;
    // Process up to 8 bits or until the end of the string
    let end = Math.min(offset + 8, len);
    for (let j = offset; j < end; j++) {
      charCode = (charCode << 1) | (binario[j] === '1' ? 1 : 0);
    }
    caracteres[i] = String.fromCharCode(charCode);
  }

  const resultStr = caracteres.join('');
  document.getElementById("bin1").textContent = "El carácter es " + resultStr;
  console.log(resultStr);
}

/**
 * Converts a single binary string into its corresponding character.
 * Optimized to use textContent instead of innerHTML.
 */
function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
