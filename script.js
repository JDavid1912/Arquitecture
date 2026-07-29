// Global lookup table optimization for 8-bit binary string representation of character codes (0 to 255)
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  binaryLookup[i] = bin;
}

function mostrarBinario() {
  const inputVal = document.getElementById("binario").value;
  const len = inputVal.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es";
    return;
  }

  // Pre-allocating standard array for O(1) assignments
  const arr = new Array(len);
  for (let i = 0; i < len; i++) {
    // Masking with 0xFF ensures charCodes are bound within 0-255 lookup table,
    // exactly replicating the original truncation / non-ASCII handling.
    const charCode = inputVal.charCodeAt(i) & 0xFF;
    arr[i] = binaryLookup[charCode];
  }

  // Join once avoiding O(N^2) string concatenations, update DOM safely using textContent
  document.getElementById("bin").textContent = "El número binario es " + arr.join(' ');
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
