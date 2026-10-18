// Pre-computed lookup table for 8-bit binary representation of character codes (0-255)
// Provides O(1) retrieval instead of computing bits in a nested loop
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  BINARY_LOOKUP[i] = i.toString(2).padStart(8, '0');
}

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  let len = arreglo.length;
  let resultado = '';

  if (len > 0) {
    // Pre-allocate array to avoid O(n^2) string concatenation overhead
    let bytes = new Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
    }
    resultado = bytes.join(' ');
  }

  // Use textContent instead of innerHTML for faster and safer DOM updating
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
