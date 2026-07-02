// Precompute binary lookup table for 0-255 characters to speed up conversion
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Use a pre-allocated array and join for O(n) performance instead of O(n^2) string concatenation
  const resultArr = new Array(len);
  for (let i = 0; i < len; i++) {
    // Bitmask with 0xFF ensures we stay within the 0-255 range of our lookup table
    resultArr[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  const resultado = resultArr.join(' ');
  // textContent is faster and safer than innerHTML for plain text
  document.getElementById("bin").textContent = "El número binario es " + resultado;
  console.log(resultado);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  if (len === 0) {
    document.getElementById("bin1").textContent = "El carácter es ";
    return;
  }

  const numBytes = Math.ceil(len / 8);
  const resultArr = new Array(numBytes);

  for (let i = 0; i < numBytes; i++) {
    // Use slice instead of substr (deprecated) and parseInt for efficiency
    const byte = binario.slice(i * 8, (i + 1) * 8);
    resultArr[i] = String.fromCharCode(parseInt(byte, 2));
  }

  const caracteres = resultArr.join('');
  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
