// Pre-computed 8-bit binary lookup table for fast ASCII/truncated character conversion
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  binaryLookup[i] = bin;
}

function mostrarBinario(){
  const inputVal = document.getElementById("binario").value;
  const len = inputVal.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Pre-allocate the array to avoid dynamic resizing and O(n^2) string concatenation
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Truncate to 8-bit (& 0xFF) to match original behavior for non-ASCII/surrogates
    resultArr[i] = binaryLookup[inputVal.charCodeAt(i) & 0xFF];
  }

  // Use textContent instead of innerHTML for better performance and security
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
