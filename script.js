// Precompute binary lookup table for characters 0-255 to achieve O(1) conversion
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

/**
 * Optimizes character to binary conversion by using a precomputed lookup table
 * and joining an array of strings to avoid O(n^2) string concatenation.
 */
function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Pre-allocate array for better performance
  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    // Bitmasking with 0xFF ensures we stay within the 0-255 range for the lookup table
    result[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  const finalResult = result.join(' ');
  // textContent is faster and more secure than innerHTML
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
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
