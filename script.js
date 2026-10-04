// Global lookup table for 8-bit binary representation of character codes (0-255).
// Initializing once avoids repeated toString(2) and bitwise loop calculations.
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  BINARY_LOOKUP[i] = i.toString(2).padStart(8, '0');
}

/**
 * Converts input text into a space-separated sequence of 8-bit binary numbers.
 * Optimized using a pre-computed lookup table and Array.join to avoid O(n^2) string concatenation.
 */
function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;

  if (!arreglo) {
    document.getElementById("bin").textContent = "El número binario es ";
    console.log("");
    return;
  }

  let len = arreglo.length;
  let bytes = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitwise AND with 0xFF ensures char codes map correctly to 8-bit lookup table
    bytes[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
  }

  let resultado = bytes.join(' ');
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
