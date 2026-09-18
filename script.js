// Pre-computed 8-bit binary lookup table (0-255) to avoid bitwise loops in conversion
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  BINARY_LOOKUP[i] = i.toString(2).padStart(8, '0');
}

/**
 * Converts text input from #binario to 8-bit binary format and displays it in #bin.
 * Optimized with a lookup table and pre-allocated array join to avoid O(n^2) string concatenation.
 */
function mostrarBinario() {
  const arreglo = document.getElementById("binario").value;
  const len = arreglo.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    console.log("");
    return;
  }

  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    result[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
  }

  const binaryString = result.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + binaryString;
  console.log(binaryString);
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
