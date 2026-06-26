// Precompute binary lookup table for characters 0-255
// This provides O(1) retrieval for character-to-binary conversion
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;

  // Early return if input is empty
  if (len === 0) {
    const outputElement = document.getElementById("bin");
    if (outputElement) outputElement.textContent = "El número binario es ";
    return;
  }

  // Optimization: Pre-allocate array to avoid O(n^2) string concatenation
  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    // Optimization: Use lookup table for O(1) binary string retrieval
    // Masking with 0xFF ensures we only handle the lower 8 bits, matching original behavior
    result[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  const finalResult = result.join(' ');

  // Optimization: Use textContent instead of innerHTML for better performance and security
  const outputElement = document.getElementById("bin");
  if (outputElement) {
    outputElement.textContent = "El número binario es " + finalResult;
  }
  console.log(finalResult);
}

function mostrarBinario1() {
  const binarioElement = document.getElementById("binario1");
  const binario = binarioElement ? binarioElement.value : "";
  const len = binario.length;

  // Optimization: Pre-allocate array for character results
  const result = [];

  for (let i = 0; i < len; i += 8) {
    // Optimization: Use slice instead of deprecated substr
    const byte = binario.slice(i, i + 8);

    // Optimization: Use parseInt for faster binary to decimal conversion
    const charCode = parseInt(byte, 2);

    if (!isNaN(charCode)) {
      result.push(String.fromCharCode(charCode));
    }
  }

  const caracteres = result.join('');
  const outputElement = document.getElementById("bin1");
  if (outputElement) {
    outputElement.textContent = "El carácter es " + caracteres;
  }
  console.log(caracteres);
}

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
