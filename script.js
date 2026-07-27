// Precomputed 256-entry lookup table mapping char codes 0-255 to their 8-bit binary strings
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
  const len = arreglo.length;

  // Early return for empty input to preserve original prefix label behavior or structure
  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es";
    console.log("");
    return;
  }

  // Pre-allocating array with `new Array(len)` is highly optimized for large inputs
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Truncate non-ASCII / surrogate char codes using & 0xFF to preserve truncation behavior
    const code = arreglo.charCodeAt(i) & 0xFF;
    resultArr[i] = binaryLookup[code];
  }

  const resultado = resultArr.join(' ');

  // Using textContent is safer and faster than innerHTML by avoiding HTML parsing overhead
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
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
