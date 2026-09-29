// Global lookup table pre-computing 8-bit binary strings for character codes 0-255
// This provides O(1) binary conversion per character instead of nested bitwise loops.
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;

  if (arreglo.length === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Pre-allocate array to avoid O(N^2) string concatenation overhead in loops
  let len = arreglo.length;
  let parts = new Array(len);

  for (let i = 0; i < len; i++) {
    parts[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  let resultado = parts.join(' ');

  // Use textContent instead of innerHTML for better performance and security
  document.getElementById("bin").textContent = "El número binario es " + resultado;
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
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
