// Global lookup table for characters 0-255 to map them to 8-bit binary strings
// Speed is a feature; pre-computing these prevents nested bitwise calculations in hot loops.
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  BINARY_LOOKUP[i] = bin;
}

function mostrarBinario(){
  const arreglo = document.getElementById("binario").value;
  const len = arreglo.length;
  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es";
    console.log("");
    return;
  }

  // Pre-allocating array with `new Array(len)` and utilizing standard for-loop with BINARY_LOOKUP
  // offers O(1) binary retrieval and prevents the O(n^2) string concatenation overhead.
  const resultArr = new Array(len);
  for (let i = 0; i < len; i++) {
    resultArr[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
  }

  const resultado = resultArr.join(' ');
  // Using textContent instead of innerHTML is much faster and more secure.
  document.getElementById("bin").textContent = "El número binario es " + resultado;
  console.log(resultado);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  if (len === 0) {
    document.getElementById("bin1").textContent = "El carácter es";
    console.log("");
    return;
  }

  // Optimize conversion from binary to characters using parseInt(byte, 2) and substr.
  // Using pre-allocated array of size Math.ceil(len / 8) is extremely efficient for large inputs.
  const arrLen = Math.ceil(len / 8);
  const charsArr = new Array(arrLen);
  let idx = 0;

  for (let i = 0; i < len; i += 8) {
    charsArr[idx++] = String.fromCharCode(parseInt(binario.substr(i, 8), 2));
  }

  const caracteres = charsArr.join('');
  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = isNaN(decimal) ? "" : String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
