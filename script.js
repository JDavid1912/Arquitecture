// Precompute a lookup table for binary representations of characters (0-255).
// This avoids bitwise calculations and string construction inside the loop.
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  let len = arreglo.length;
  // Pre-allocate the array for maximum performance.
  let resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // We use & 0xFF to handle non-ASCII characters by taking only the lower 8 bits,
    // maintaining consistency with the original implementation's behavior.
    let charCode = arreglo.charCodeAt(i) & 0xFF;
    resultado[i] = binaryLookup[charCode];
  }

  const finalResult = resultado.join(' ');
  // textContent is faster than innerHTML and safer from XSS.
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  let len = binario.length;
  let numBytes = Math.ceil(len / 8);
  let resultChars = new Array(numBytes);

  for (let i = 0; i < numBytes; i++) {
    let byte = binario.slice(i * 8, (i + 1) * 8);
    // Use parseInt with base 2 for faster binary decoding.
    let charCode = parseInt(byte, 2);
    resultChars[i] = String.fromCharCode(charCode);
  }

  const caracteres = resultChars.join('');
  // Consistently use textContent for better performance and security.
  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
