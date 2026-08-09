// Precomputed global lookup table mapping character codes (0-255) to 8-bit binary strings.
// This provides O(1) retrieval for binary representation of any truncated 8-bit char code.
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  BINARY_LOOKUP[i] = bin;
}

function mostrarBinario(){
  const inputVal = document.getElementById("binario").value;
  const len = inputVal.length;

  // Pre-allocate array for maximum performance, avoiding O(N^2) string concatenations
  const binaryArr = new Array(len);
  for (let i = 0; i < len; i++) {
    // Truncating character codes to 8-bit using bitwise AND (& 0xFF) preserves the exact behavior of the original loop
    binaryArr[i] = BINARY_LOOKUP[inputVal.charCodeAt(i) & 0xFF];
  }

  const resultado = binaryArr.join(' ');
  // Use textContent instead of innerHTML for improved security and performance
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

  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
