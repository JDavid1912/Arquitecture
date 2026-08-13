// Precomputed lookup table for character codes 0-255 to map them to 8-bit binary strings.
// This delivers O(1) binary conversion for any ASCII or 8-bit character code.
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  BINARY_LOOKUP[i] = bin;
}

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  if (!arreglo) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  let len = arreglo.length;
  // Pre-allocating the array avoids dynamic resizing overhead and is highly efficient in V8.
  let resultado = new Array(len);

  // O(n) loop: converting each character using the precomputed O(1) lookup table.
  // Using & 0xFF matches original truncation behavior for non-ASCII/surrogate pair characters.
  for (let i = 0; i < len; i++) {
    resultado[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
  }

  // Using Array.join(' ') is significantly faster than repeated string concatenation.
  // textContent is used instead of innerHTML to avoid parsing overhead and improve security.
  let finalStr = resultado.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + finalStr;
  console.log(finalStr);
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
