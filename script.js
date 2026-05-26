// Precompute lookup table for text-to-binary conversion
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Converts text input to a space-separated string of 8-bit binary representations.
 * Optimized with a lookup table and Array.join() to avoid O(n^2) string concatenation.
 */
function mostrarBinario(){
  const inputElement = document.getElementById("binario");
  if (!inputElement) return;

  const text = inputElement.value;
  const len = text.length;
  const resultadoArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmasking with 0xFF handles standard characters and ensures lookup table safety
    const charCode = text.charCodeAt(i) & 0xFF;
    resultadoArr[i] = BINARY_LOOKUP[charCode];
  }

  const finalResult = resultadoArr.join(' ');

  const outputElement = document.getElementById("bin");
  if (outputElement) {
    // textContent is used for performance and security (prevents HTML injection)
    outputElement.textContent = "El número binario es " + finalResult;
  }

  // Storing result in finalResult avoids re-calculating for console.log
  console.log(finalResult);
}

/**
 * Converts a string of binary digits to characters.
 * Optimized with modern methods while maintaining functional parity.
 */
function mostrarBinario1() {
  const inputElement = document.getElementById("binario1");
  if (!inputElement) return;

  const binario = inputElement.value;
  let caracteres = '';

  for (let i = 0; i < binario.length; i += 8) {
    // slice is used as a modern replacement for the deprecated substr
    const byte = binario.slice(i, i + 8);
    let charCode = 0;

    for (let j = 0; j < byte.length; j++) {
      charCode = charCode * 2 + (byte[j] === '1' ? 1 : 0);
    }

    caracteres += String.fromCharCode(charCode);
  }

  const outputElement = document.getElementById("bin1");
  if (outputElement) {
    outputElement.textContent = "El carácter es " + caracteres;
  }
  console.log(caracteres);
}

/**
 * Converts a single binary string input to its character representation.
 */
function mostrarCaracter(){  
  const inputElement = document.getElementById("caracter");
  if (!inputElement) return;

  const binario = inputElement.value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);

  const outputElement = document.getElementById("bin1");
  if (outputElement) {
    outputElement.textContent = "El carácter es " + caracter;
  }
}
