// Pre-compute a global lookup table for 0-255 values for O(1) character-to-binary lookup.
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  binaryLookup[i] = bin;
}

function mostrarBinario() {
  const arreglo = document.getElementById("binario").value;

  // Early return for empty input to match original behavior and skip unnecessary processing.
  if (arreglo.length === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Pre-allocate array of exactly the correct size to avoid dynamic resizing.
  const len = arreglo.length;
  const arrResult = new Array(len);

  for (let i = 0; i < len; i++) {
    // Mask with 0xFF (charCode & 0xFF) to match original bitwise truncation of surrogate pairs (0-255 lookup range).
    const maskedCode = arreglo.charCodeAt(i) & 0xFF;
    arrResult[i] = binaryLookup[maskedCode];
  }

  // Join array using space separator to build final string with O(N) complexity instead of O(N^2) concatenation.
  const resultado = arrResult.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + resultado;
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;

  // Return early for empty string.
  if (!binario) {
    document.getElementById("bin1").textContent = "El carácter es ";
    return;
  }

  let caracteres = '';

  for (let i = 0; i < binario.length; i += 8) {
    const byte = binario.substr(i, 8);
    let charCode = 0;

    for (let j = 0; j < byte.length; j++) {
      charCode = charCode * 2 + (byte[j] === '1' ? 1 : 0);
    }

    caracteres += String.fromCharCode(charCode);
  }

  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
}

function mostrarCaracter() {
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = isNaN(decimal) ? "" : String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
