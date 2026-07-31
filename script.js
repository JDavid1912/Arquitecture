// Pre-computed lookup table for O(1) binary retrieval (characters 0-255)
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

  if (arreglo.length === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  const len = arreglo.length;
  // Pre-allocating array with `new Array(len)` is highly efficient for bulk processing
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitwise mask 0xFF to mimic original character truncation for non-ASCII/surrogate characters
    const charCode = arreglo.charCodeAt(i) & 0xFF;
    resultArr[i] = binaryLookup[charCode];
  }

  // Join once at the end instead of concatenating strings in the loop
  const resultado = resultArr.join(' ');

  // Update DOM using textContent instead of innerHTML for better performance and security
  document.getElementById("bin").textContent = "El número binario es " + resultado;
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
