// Precomputed lookup table for 8-bit binary strings (0-255)
// Optimization: Avoids repeated bitwise operations and string conversions.
const BINARY_TABLE = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  let input = document.getElementById("binario").value;
  let len = input.length;
  // Optimization: Pre-allocating the array is faster than push() for large inputs.
  let resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Masking with 0xFF ensures we stay within the 0-255 range for the lookup table.
    let charCode = input.charCodeAt(i) & 0xFF;
    resultado[i] = BINARY_TABLE[charCode];
  }

  // Optimization: Array.join(' ') is O(n) while += in a loop is O(n^2) due to string immutability.
  // Optimization: textContent is faster and more secure than innerHTML.
  document.getElementById("bin").textContent = "El número binario es " + resultado.join(' ');
}

function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  let len = binario.length;
  // Optimization: Pre-allocating the array for maximum efficiency.
  let resultArr = new Array(Math.ceil(len / 8));

  for (let i = 0, k = 0; i < len; i += 8, k++) {
    // Optimization: substring(i, i + 8) instead of deprecated substr(i, 8).
    let byte = binario.substring(i, i + 8);

    // Optimization: parseInt(byte, 2) is a native, highly optimized way to parse binary.
    let charCode = parseInt(byte, 2);
    if (!isNaN(charCode)) {
      resultArr[k] = String.fromCharCode(charCode);
    }
  }

  // Optimization: Array.join('') for efficiency.
  document.getElementById("bin1").textContent = "El carácter es " + resultArr.join('');
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  // Optimization: textContent instead of innerHTML.
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
