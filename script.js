// Global lookup table for 8-bit binary representations of numbers 0-255
// This provides O(1) retrieval during conversion
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const inputElement = document.getElementById("binario");
  const text = inputElement.value;
  const len = text.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Pre-allocate array for better performance when building large strings
  let binaryResults = new Array(len);

  for (let i = 0; i < len; i++) {
    // text.charCodeAt(i) & 0xFF ensures we stay within the 0-255 range for the lookup table
    binaryResults[i] = BINARY_LOOKUP[text.charCodeAt(i) & 0xFF];
  }

  // join(' ') is significantly faster than repeated string concatenation (O(n) vs O(n^2))
  const finalResult = binaryResults.join(' ');

  // textContent is safer and faster than innerHTML for simple text updates
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
