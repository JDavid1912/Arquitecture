// Precomputed lookup table for 8-bit binary strings (0-255).
// This avoids expensive bitwise calculations and repeated string creation during conversion.
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;
  // Pre-allocating the array and using join(' ') is significantly faster than string concatenation in a loop.
  // This avoids the O(n^2) performance hit caused by string immutability in JavaScript.
  const resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Use & 0xFF to ensure 8-bit character mapping, matching the original bitwise logic.
    const charCode = input.charCodeAt(i) & 0xFF;
    resultado[i] = binaryLookup[charCode];
  }

  const finalResult = resultado.join(' ');
  // textContent is faster than innerHTML because it doesn't trigger the HTML parser.
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  // Calculate expected number of characters (1 for every 8 bits).
  const resultLen = Math.ceil(len / 8);
  const resultArr = new Array(resultLen);

  for (let i = 0, j = 0; i < len; i += 8, j++) {
    // slice() is preferred over the deprecated substr().
    const byte = binario.slice(i, i + 8);
    // parseInt(byte, 2) is a highly optimized built-in for binary string parsing.
    const charCode = parseInt(byte, 2);

    if (!isNaN(charCode)) {
      resultArr[j] = String.fromCharCode(charCode);
    } else {
      resultArr[j] = '';
    }
  }

  const finalResult = resultArr.join('');
  document.getElementById("bin1").textContent = "El carácter es " + finalResult;
  console.log(finalResult);
}

function mostrarCaracter() {
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  // textContent is faster and more secure than innerHTML.
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
