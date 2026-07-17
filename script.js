// Pre-computed lookup table for 8-bit binary strings (0 to 255).
// This avoids nested bitwise loops and redundant string conversions.
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  binaryLookup[i] = bin;
}

function mostrarBinario(){
  const val = document.getElementById("binario").value;
  const len = val.length;

  // Use a pre-allocated array to avoid expensive O(n^2) string concatenation
  const resultadoArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Truncating to 8-bit using & 0xFF preserves original behavior for non-ASCII charCodes
    resultadoArr[i] = binaryLookup[val.charCodeAt(i) & 0xFF];
  }

  const resultadoStr = resultadoArr.join(' ');

  // Use textContent instead of innerHTML to avoid HTML parsing overhead and improve security
  document.getElementById("bin").textContent = "El número binario es " + resultadoStr;
  console.log(resultadoStr);
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
