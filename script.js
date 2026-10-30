// Pre-computed 8-bit binary lookup table for ASCII char codes 0-255
// Avoids repeated bitwise calculations and padStart overhead inside loops.
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  BINARY_LOOKUP[i] = i.toString(2).padStart(8, '0');
}

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  let len = arreglo.length;
  let resultado = '';

  if (len > 0) {
    // Pre-allocate array for binary representations to avoid O(N^2) string concatenation
    let parts = new Array(len);
    for (let i = 0; i < len; i++) {
      // Bitmask & 0xFF matches 8-bit truncation behavior for non-ASCII characters
      parts[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
    }
    resultado = parts.join(' ');
  }

  // Use textContent instead of innerHTML for better performance and security
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
