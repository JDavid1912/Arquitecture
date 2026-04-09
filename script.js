// Precompute binary strings for all 256 possible byte values
// This provides a significant speedup for large inputs by avoiding repeated bitwise operations and string padding
const BYTE_TO_BIN = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Converts input text to a space-separated string of 8-bit binary representations.
 * Optimized with a lookup table and array join for O(n) performance.
 */
function mostrarBinario(){
  let input = document.getElementById("binario").value;
  const len = input.length;
  // Use an array to collect results and join at the end for O(n) string construction
  let resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Treat characters as 8-bit bytes, matching original behavior
    resultado[i] = BYTE_TO_BIN[input.charCodeAt(i) & 0xFF] || '00000000';
  }

  const finalResult = resultado.join(' ');
  document.getElementById("bin").innerHTML = "El número binario es " + finalResult;
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
