// Pre-computed lookup table for 8-bit binary strings (0-255)
// Speeds up character-to-binary conversion by avoiding repeated bitwise operations in loops.
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

/**
 * Converts input text into a space-separated 8-bit binary string representation.
 * Optimized using a pre-allocated array and global lookup table.
 */
function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  let len = arreglo.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Pre-allocate array to avoid O(n^2) string reallocations
  let bytes = new Array(len);

  for (let i = 0; i < len; i++) {
    // Truncate char code to 8-bit (& 0xFF) to match standard 8-bit binary lookup
    bytes[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  // Use textContent instead of innerHTML for faster, safer DOM rendering
  document.getElementById("bin").textContent = "El número binario es " + bytes.join(' ');
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
