// Pre-computed global lookup table of size 256 for O(1) binary retrieval of ASCII/truncated characters
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

  // Early return matching the original behavior (displaying empty prefix or empty text content)
  if (arreglo.length === 0) {
    document.getElementById("bin").textContent = "El número binario es";
    console.log('');
    return;
  }

  const len = arreglo.length;
  // Pre-allocate array for maximum speed instead of O(N^2) string concatenation
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Truncate non-ASCII / multi-byte characters with & 0xFF to preserve behavioral compatibility
    let charCode = arreglo.charCodeAt(i) & 0xFF;
    resultArr[i] = binaryLookup[charCode];
  }

  // Join the binary array with spaces
  let resultado = resultArr.join(' ');

  // Use textContent instead of innerHTML for DOM security and speed
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

  document.getElementById("bin1").innerHTML = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").innerHTML = "El carácter es " + caracter;
}
