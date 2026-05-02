// Precomputed lookup table for 8-bit binary strings (0-255)
// This avoids repeated bitwise calculations and string padding in the hot path.
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  let len = arreglo.length;

  // Pre-allocating the array is more efficient than repeatedly pushing or concatenating strings.
  let results = new Array(len);

  for (let i = 0; i < len; i++) {
    // Masking with 0xFF ensures we stay within the 0-255 range for the lookup table.
    results[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
  }

  // Using Array.join(' ') is much faster than string concatenation in a loop (O(n) vs O(n^2)).
  let resultado = results.join(' ');

  // Using textContent is faster and more secure than innerHTML.
  document.getElementById("bin").textContent = "El número binario es " + resultado;
  console.log(resultado);
}

function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  let caracteres = '';

  for (let i = 0; i < binario.length; i += 8) {
    let byte = binario.substring(i, i + 8);
    let charCode = parseInt(byte, 2);

    if (!isNaN(charCode)) {
      caracteres += String.fromCharCode(charCode);
    }
  }

  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  // Consistent use of textContent for performance and security.
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
