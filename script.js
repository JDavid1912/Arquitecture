// Precomputed lookup table for 8-bit binary strings (0-255)
// This avoids repeated calculations during character-to-binary conversion.
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  const len = arreglo.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Use a pre-allocated array and join(' ') to avoid O(n^2) string concatenation performance issues.
  let resultadoArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // charCodeAt returns 0-65535. We mask to 8 bits (& 0xFF) to match original 8-bit output logic.
    resultadoArr[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  const finalResult = resultadoArr.join(' ');
  // Use textContent instead of innerHTML for better performance and to avoid XSS risks.
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  const len = binario.length;
  // Calculate the number of bytes (8 bits each)
  const numBytes = Math.ceil(len / 8);
  let resultadoArr = new Array(numBytes);

  for (let i = 0; i < len; i += 8) {
    // Use slice instead of deprecated substr
    let byte = binario.slice(i, i + 8);
    // Use parseInt with radix 2 for much faster binary-to-decimal conversion
    resultadoArr[i / 8] = String.fromCharCode(parseInt(byte, 2));
  }

  const finalResult = resultadoArr.join('');
  document.getElementById("bin1").textContent = "El carácter es " + finalResult;
  console.log(finalResult);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").innerHTML = "El carácter es " + caracter;
}
