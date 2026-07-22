// Pre-computed lookup table for 8-bit binary representation of character codes (0-255).
// This provides O(1) retrieval during conversion and avoids repeating bitwise operations.
const binaryLookup = (() => {
  const table = new Array(256);
  for (let i = 0; i < 256; i++) {
    let bin = '';
    for (let j = 7; j >= 0; j--) {
      bin += (i & (1 << j)) ? '1' : '0';
    }
    table[i] = bin;
  }
  return table;
})();

/**
 * Converts input text to its binary representation.
 * Optimized with a global lookup table, pre-allocated array, and textContent to maximize performance.
 */
function mostrarBinario(){
  const arreglo = document.getElementById("binario").value;

  // Early return for empty input to match original behavior and avoid unnecessary processing.
  if (!arreglo) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  const len = arreglo.length;
  // Pre-allocating the array avoids continuous resizing and is highly performant.
  const resultadoArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Replicate truncation behavior using bitmasking with 0xFF to ensure mathematical equivalence.
    resultadoArr[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  // Join elements with a single space to construct the final string cleanly without trailing spaces.
  const resultado = resultadoArr.join(' ');

  // Update DOM using textContent instead of innerHTML to prevent HTML parsing and secure the page.
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
