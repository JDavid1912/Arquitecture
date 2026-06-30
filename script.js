// Precompute lookup table for 8-bit binary representation (0-255)
// This avoids repeated bitwise operations for every character in every call.
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  if (!input) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  const len = input.length;
  const resultArr = new Array(len);

  // Optimization: Use precomputed lookup table and array joining for O(n) complexity.
  // Original version used nested loops and string concatenation, which can be O(n^2).
  for (let i = 0; i < len; i++) {
    const charCode = input.charCodeAt(i);
    // Mimic original behavior by masking to 8 bits
    resultArr[i] = binaryLookup[charCode & 0xFF];
  }

  const finalString = resultArr.join(' ');

  // Optimization: Use textContent instead of innerHTML for better performance and security.
  document.getElementById("bin").textContent = "El número binario es " + finalString;
  console.log(finalString);
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

function mostrarCaracter() {
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").innerHTML = "El carácter es " + caracter;
}
