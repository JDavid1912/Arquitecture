// Precompute binary strings for bytes 0-255 to avoid redundant bitwise operations
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Converts the input text to its binary representation.
 * Optimization: Uses a precomputed lookup table and array joining for O(n) performance.
 */
function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;

  // Pre-allocate array for better performance with large strings
  const resultadoArreglo = new Array(len);

  for (let i = 0; i < len; i++) {
    // Masking with 0xFF replicates the original 8-bit truncation behavior
    resultadoArreglo[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  const finalResult = resultadoArreglo.join(' ');

  // textContent is faster and more secure than innerHTML
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  let caracteres = '';

  for (let i = 0; i < binario.length; i += 8) {
    let byte = binario.slice(i, i + 8);
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
