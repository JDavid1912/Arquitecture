// Precomputed lookup table for 8-bit binary strings (0-255) to avoid repeated calculations.
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  let len = arreglo.length;
  let resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Optimization: Use a precomputed lookup table and avoid bitwise loop for performance.
    // bitwise AND with 0xFF mimics original behavior for character codes.
    let charCode = arreglo.charCodeAt(i) & 0xFF;
    resultado[i] = binaryLookup[charCode];
  }

  // Optimization: Use Array.join instead of string concatenation in a loop to avoid O(n^2) performance.
  let finalResult = resultado.join(' ');
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
