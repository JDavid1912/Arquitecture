// Precomputed lookup table for 8-bit binary representations (0-255)
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;

  // Optimization: Pre-allocate array and use a standard loop for maximum performance.
  // We iterate over UTF-16 code units (like the original) to maintain compatibility with the app's 8-bit logic.
  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    result[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF] || '00000000';
  }

  const outputElement = document.getElementById("bin");
  // Optimization: textContent is faster and safer than innerHTML
  const resultadoFinal = result.join(' ');
  outputElement.textContent = "El número binario es " + resultadoFinal;
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
