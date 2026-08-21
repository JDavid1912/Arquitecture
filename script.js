// Pre-computed 256-element lookup table for 8-bit binary representation of character codes (0-255).
// Initialized once globally to avoid recalculating binary representations in loops.
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  BINARY_LOOKUP[i] = i.toString(2).padStart(8, '0');
}

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  if (!arreglo) {
    document.getElementById("bin").textContent = "El número binario es ";
    console.log("");
    return;
  }

  // Optimize conversion by mapping character codes to O(1) lookup table and using array joining
  // to avoid O(N^2) string concatenation overhead.
  const len = arreglo.length;
  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    result[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
  }

  let resultado = result.join(' ');

  // Use textContent instead of innerHTML for faster DOM updates and better security
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

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
