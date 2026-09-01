// Pre-computed lookup table for 8-bit binary representation of character codes (0-255)
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  BINARY_LOOKUP[i] = i.toString(2).padStart(8, '0');
}

/**
 * Converts input text into space-separated 8-bit binary strings.
 * Optimized using a pre-computed lookup table, array pre-allocation, and textContent.
 */
function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  let len = arreglo.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Pre-allocate array to avoid reallocation overhead and string concatenation O(N^2)
  let resultArr = new Array(len);
  for (let i = 0; i < len; i++) {
    resultArr[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
  }

  let resultado = resultArr.join(' ');
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

  document.getElementById("bin1").innerHTML = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
