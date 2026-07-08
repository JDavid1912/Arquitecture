// Pre-calculated lookup table for 8-bit binary strings (0-255)
// This avoids redundant bitwise operations and toString calls during conversion.
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Use a pre-allocated array and join(' ') for O(n) string building,
  // avoiding the O(n^2) cost of repeated string concatenation.
  const resultados = new Array(len);

  for (let i = 0; i < len; i++) {
    // charCodeAt(i) & 0xFF ensures we stay within the 0-255 lookup table
    // while matching the 8-bit output behavior of the original implementation.
    resultados[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  const resultado = resultados.join(' ');
  // textContent is faster and safer than innerHTML for simple text updates.
  document.getElementById("bin").textContent = "El número binario es " + resultado;
  console.log(resultado);
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
