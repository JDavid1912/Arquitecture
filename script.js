// Pre-allocate a global lookup table for characters 0-255 to map to their 8-bit binary string
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  let binStr = '';
  for (let j = 7; j >= 0; j--) {
    binStr += (i & (1 << j)) ? '1' : '0';
  }
  binaryLookup[i] = binStr;
}

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  if (!arreglo) {
    document.getElementById("bin").textContent = "El número binario es ";
    console.log("");
    return;
  }

  // Pre-allocate the array to avoid dynamic resizing, and standard for-loop for max performance
  const len = arreglo.length;
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Truncating non-ASCII characters to 0-255 (using & 0xFF) matches the original nested loop's behavior
    resultArr[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  const resultado = resultArr.join(' ');

  // Use textContent instead of innerHTML to avoid parsing overhead and improve security
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
