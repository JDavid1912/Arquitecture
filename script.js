/**
 * Precomputed lookup table for 8-bit binary representation of character codes 0-255.
 * This avoids redundant bitwise calculations during conversion.
 */
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;
  // Pre-allocate array for better performance with large inputs
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    /**
     * Using bitmask 0xFF to ensure we only look up the first 256 character codes.
     * This handles standard ASCII/ISO-8859-1 characters efficiently.
     */
    resultArr[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  // join(' ') is much faster than repeated string concatenation (O(n) vs O(n^2))
  const finalResult = resultArr.join(' ');

  // textContent is faster and more secure than innerHTML
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  // Pre-allocate array for character results
  const charArr = new Array(Math.ceil(len / 8));
  let count = 0;

  for (let i = 0; i < len; i += 8) {
    // slice() is preferred over the deprecated substr()
    const byte = binario.slice(i, i + 8);
    /**
     * parseInt(byte, 2) is highly optimized in modern JS engines
     * for converting binary strings to decimals.
     */
    charArr[count++] = String.fromCharCode(parseInt(byte, 2));
  }

  const caracteres = charArr.join('');
  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter() {
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  // Using textContent for consistent performance and security
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
