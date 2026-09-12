// Pre-computed lookup table for 8-bit character binary strings (0 to 255)
// Avoids repeated bitwise logic and string building during conversion
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  BINARY_LOOKUP[i] = i.toString(2).padStart(8, '0');
}

/**
 * Converts input text into a space-separated sequence of 8-bit binary representations.
 * Uses a lookup table and pre-allocated array for O(N) performance on large strings.
 */
function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  let len = arreglo.length;
  let resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Truncate charCode to 8 bits (& 0xFF) for table lookup
    resultArr[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
  }

  let resStr = resultArr.join(' ');

  // Update DOM using textContent to prevent HTML parsing overhead and security issues
  document.getElementById("bin").textContent = "El número binario es " + resStr;
  console.log(resStr);
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
