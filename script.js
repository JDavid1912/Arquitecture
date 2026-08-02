// Pre-computed lookup table for 8-bit binary representation of character codes 0 to 255.
// This optimizes character-to-binary conversion to O(1) per character.
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  binaryLookup[i] = bin;
}

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  let len = arreglo.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es";
    return;
  }

  // Pre-allocate the array for maximum conversion performance
  let resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Truncating to 0-255 using bitmasking & 0xFF to preserve behavior for non-ASCII characters
    resultArr[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  // Use textContent instead of innerHTML for faster, safer DOM rendering, and join elements cleanly
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
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
