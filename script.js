// Precompute lookup table for 8-bit binary strings (0-255) to avoid redundant calculations
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const value = document.getElementById("binario").value;
  const len = value.length;
  const resultados = new Array(len);

  // Performance: Use a pre-allocated array and lookup table for O(n) conversion.
  // This avoids O(n^2) string concatenation and repeated bitwise operations in loops.
  for (let i = 0; i < len; i++) {
    // Mask with 0xFF to ensure 8-bit range, consistent with original 7..0 bit loop behavior.
    resultados[i] = binaryLookup[value.charCodeAt(i) & 0xFF];
  }

  const resultadoFinal = resultados.join(' ');
  // Performance & Security: textContent is faster than innerHTML as it doesn't trigger HTML parsing.
  document.getElementById("bin").textContent = "El número binario es " + resultadoFinal;
  console.log(resultadoFinal);
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
