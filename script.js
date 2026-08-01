// Pre-calculated lookup table for 8-bit binary representation of character codes 0-255.
// This allows O(1) retrieval of binary values, eliminating nested loops during translation.
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  binaryLookup[i] = bin;
}

function mostrarBinario(){
  const arreglo = document.getElementById("binario").value;
  const len = arreglo.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Pre-allocate the array to avoid repeated dynamic resizing or string concatenation (O(N^2)).
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Truncate to 8-bit character code (& 0xFF) to match original bitwise behavior
    // and safely index into our 256-entry lookup table.
    resultArr[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  // Joining is much faster than successive string concatenations.
  // Using textContent instead of innerHTML avoids overhead of HTML parsing and protects against XSS.
  document.getElementById("bin").textContent = "El número binario es " + resultArr.join(' ');
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
