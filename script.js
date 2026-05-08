// Precomputed binary lookup table for all 256 characters (0-255)
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const inputElement = document.getElementById("binario");
  const outputElement = document.getElementById("bin");
  const text = inputElement.value;
  const len = text.length;

  // Pre-allocating array is faster than push() in many engines for large strings
  const results = new Array(len);

  for (let i = 0; i < len; i++) {
    // We mask with 0xFF to ensure we stay within the lookup table range for standard 8-bit characters
    results[i] = BINARY_LOOKUP[text.charCodeAt(i) & 0xFF];
  }

  const resultString = results.join(' ');
  outputElement.textContent = "El número binario es " + resultString;
  console.log(resultString);
}

function mostrarBinario1() {
  const inputElement = document.getElementById("binario1");
  const outputElement = document.getElementById("bin1");
  const binario = inputElement.value;
  const len = binario.length;
  const results = [];

  for (let i = 0; i < len; i += 8) {
    const byte = binario.substring(i, i + 8);
    if (byte.length === 0) break;
    // Using parseInt with radix 2 is highly optimized in modern engines
    results.push(String.fromCharCode(parseInt(byte, 2)));
  }

  const resultString = results.join('');
  outputElement.textContent = "El carácter es " + resultString;
  console.log(resultString);
}

function mostrarCaracter() {
  const inputElement = document.getElementById("caracter");
  const outputElement = document.getElementById("bin1");
  const binario = inputElement.value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  outputElement.textContent = "El carácter es " + caracter;
}
