// Precompute binary lookup table for performance (0-255)
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  const len = arreglo.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Optimization: Using a pre-allocated array and join(' ') is significantly faster
  // than O(n^2) string concatenation in loops.
  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    // Optimization: Use lookup table for O(1) binary conversion
    // Masking with 0xFF ensures we stay within the 0-255 range
    result[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  // Optimization: textContent is faster and more secure than innerHTML
  document.getElementById("bin").textContent = "El número binario es " + result.join(' ');
  console.log(result.join(' '));
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
