// Precompute lookup table for 8-bit binary strings (0-255)
// This avoids repeated calculations during conversion.
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  let input = document.getElementById("binario").value;

  if (!input) {
    // Match original behavior: showing the label even when input is empty
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  const len = input.length;
  // Pre-allocate array for better performance than repeated string concatenation (O(n^2))
  const resultadoArreglo = new Array(len);

  for (let i = 0; i < len; i++) {
    // The original code used an 8-bit loop, effectively bitmasking with 0xFF.
    // We use the precomputed lookup table for O(1) retrieval.
    resultadoArreglo[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  // Join the array once at the end for efficiency.
  const finalResult = resultadoArreglo.join(' ');

  // Use textContent instead of innerHTML for better performance and security.
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  if (!binario) {
    document.getElementById("bin1").textContent = "El carácter es ";
    return;
  }

  const len = binario.length;
  const numBytes = Math.ceil(len / 8);
  const resultChars = new Array(numBytes);

  for (let i = 0; i < numBytes; i++) {
    // Use slice instead of deprecated substr
    let byte = binario.slice(i * 8, (i + 1) * 8);
    // Use native parseInt for optimized binary parsing
    resultChars[i] = String.fromCharCode(parseInt(byte, 2));
  }

  const caracteres = resultChars.join('');
  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
