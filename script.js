// Precompute binary lookup table for characters 0-255
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  let input = document.getElementById("binario").value;
  let len = input.length;
  // Pre-allocate array for performance
  let resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmasking to 0xFF ensures we stay within the 0-255 lookup table
    // and matches the original behavior of 8-bit conversion.
    resultado[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  const finalResult = resultado.join(' ');
  // textContent is faster and safer than innerHTML
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  let len = binario.length;
  // Calculate expected number of characters
  let numChars = Math.ceil(len / 8);
  let caracteres = new Array(numChars);

  for (let i = 0, j = 0; i < len; i += 8, j++) {
    let byte = binario.slice(i, i + 8);
    // Use native parseInt for binary to decimal conversion
    caracteres[j] = String.fromCharCode(parseInt(byte, 2));
  }

  const finalResult = caracteres.join('');
  document.getElementById("bin1").textContent = "El carácter es " + finalResult;
  console.log(finalResult);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
