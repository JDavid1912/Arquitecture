// Precompute 8-bit binary strings for all 256 possible byte values to avoid redundant calculations.
// Bolt ⚡ Optimization: O(1) lookup instead of O(n) bitwise loop per character.
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;
  const resultados = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmask with 0xFF ensures we stay within the 0-255 range for the lookup table.
    // This matches the original 8-bit conversion logic.
    resultados[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  const resultadoFinal = resultados.join(' ');
  // Bolt ⚡ Optimization: textContent is faster and more secure than innerHTML.
  document.getElementById("bin").textContent = "El número binario es " + resultadoFinal;
  console.log(resultadoFinal);
}

function mostrarBinario1() {
  // Note: binario1 element is not present in the current index.html, but maintained for compatibility.
  const inputElem = document.getElementById("binario1");
  if (!inputElem) return;

  const binario = inputElem.value;
  const len = binario.length;
  const caracteresArr = [];

  for (let i = 0; i < len; i += 8) {
    // Bolt ⚡ Optimization: Use substring instead of deprecated substr and parseInt for faster conversion.
    const byte = binario.substring(i, i + 8);
    if (byte.length > 0) {
      caracteresArr.push(String.fromCharCode(parseInt(byte, 2)));
    }
  }

  const caracteres = caracteresArr.join('');
  const outputElem = document.getElementById("bin1");
  if (outputElem) {
    outputElem.textContent = "El carácter es " + caracteres;
  }
  console.log(caracteres);
}

function mostrarCaracter() {
  const binario = document.getElementById("caracter").value;
  // Bolt ⚡ Optimization: parseInt is efficient for binary string conversion.
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
