// Pre-computed 8-bit binary lookup table for byte values (0-255) to achieve O(1) binary conversion
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  BINARY_LOOKUP[i] = (i | 0x100).toString(2).slice(1);
}

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;

  if (arreglo.length === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    console.log("");
    return;
  }

  // Pre-allocate array and lookup binary strings to avoid O(N^2) string concatenation and bitwise loops
  const len = arreglo.length;
  const bytes = new Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
  }

  let formattedResult = bytes.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + formattedResult;
  console.log(formattedResult);
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
