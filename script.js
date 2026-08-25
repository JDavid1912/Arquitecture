// Global lookup table pre-computing 8-bit binary strings (0-255) for O(1) character lookup
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

/**
 * Converts input text into an 8-bit binary string representation.
 * Optimized with global lookup table, pre-allocated result array, and textContent DOM insertion.
 */
function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  if (!arreglo) {
    document.getElementById("bin").textContent = "El número binario es ";
    console.log("");
    return;
  }

  const len = arreglo.length;
  const result = new Array(len);

  // Convert each character using pre-computed lookup table & pre-allocated array
  for (let i = 0; i < len; i++) {
    result[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  const resultadoFormatted = result.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + resultadoFormatted;
  console.log(resultadoFormatted);
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
