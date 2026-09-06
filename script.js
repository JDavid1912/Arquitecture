// Pre-computed lookup table for 8-bit binary strings (0-255) to speed up char-to-binary conversion
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  BINARY_LOOKUP[i] = i.toString(2).padStart(8, '0');
}

function mostrarBinario() {
  const arreglo = document.getElementById("binario").value;
  const len = arreglo.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    console.log("");
    return;
  }

  // Pre-allocated array and lookup table avoid O(n^2) string concatenation and nested loops
  const binaryArray = new Array(len);
  for (let i = 0; i < len; i++) {
    binaryArray[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
  }

  const resultStr = binaryArray.join(' ');
  // Use textContent instead of innerHTML for faster DOM update
  document.getElementById("bin").textContent = "El número binario es " + resultStr;
  console.log(resultStr);
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
