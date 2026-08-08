// Pre-allocated lookup table for fast 8-bit binary lookup (O(1) retrieval)
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  binaryLookup[i] = bin;
}

function mostrarBinario() {
  const inputVal = document.getElementById("binario").value;
  const len = inputVal.length;

  // Early return if empty input to preserve original behavior prefix label
  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    console.log('');
    return;
  }

  // Pre-allocate array for fast string transformation (avoiding repeated concat / O(n^2))
  const resultadoArreglo = new Array(len);
  for (let i = 0; i < len; i++) {
    // Truncating to 8-bit with & 0xFF matches original behavior for non-ASCII/surrogate characters
    const charCode = inputVal.charCodeAt(i) & 0xFF;
    resultadoArreglo[i] = binaryLookup[charCode];
  }

  const resultado = resultadoArreglo.join(' ');

  // Using textContent instead of innerHTML to reduce reflow costs & enhance security
  document.getElementById("bin").textContent = "El número binario es " + resultado;
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

  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter() {
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
