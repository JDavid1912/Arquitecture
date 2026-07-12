// Pre-calculated lookup table for 8-bit binary strings (0-255)
// This avoids repeated bitwise operations and string conversions during runtime.
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const inputElement = document.getElementById("binario");
  const resultElement = document.getElementById("bin");
  const text = inputElement.value;
  const len = text.length;

  if (len === 0) {
    resultElement.textContent = "El número binario es ";
    return;
  }

  // Pre-allocate array for better performance than string concatenation (O(n^2) in some engines)
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmask with 0xFF ensures we handle non-ASCII characters by truncation,
    // matching the behavior of the original 8-bit bitwise loop.
    resultArr[i] = BINARY_LOOKUP[text.charCodeAt(i) & 0xFF];
  }

  const resultado = resultArr.join(' ');

  // Using textContent is faster than innerHTML as it skips HTML parsing
  resultElement.textContent = "El número binario es " + resultado;
  console.log(resultado);
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

function mostrarCaracter() {
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
