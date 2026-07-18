// Global pre-computed lookup table for 8-bit binary representation of character codes (0-255).
// This achieves O(1) binary string retrieval during translation and avoids re-computation.
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  binaryLookup[i] = bin;
}

function mostrarBinario(){
  const arreglo = document.getElementById("binario").value;

  // Early return for empty input to match original behavior and avoid unnecessary processing
  if (arreglo.length === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    console.log("");
    return;
  }

  // Pre-allocate array to avoid costly O(n^2) string concatenation in hot paths.
  const len = arreglo.length;
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmask charCode with 0xFF to safely replicate original character truncation (for non-ASCII or surrogate codes).
    resultArr[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  const resultado = resultArr.join(' ');

  // Optimize DOM manipulation by using textContent instead of slow innerHTML parsing.
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

  document.getElementById("bin1").innerHTML = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").innerHTML = "El carácter es " + caracter;
}
