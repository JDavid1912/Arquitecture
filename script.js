// Pre-calculate 8-bit binary strings for characters 0-255 for O(1) lookup
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

  // Optimization: Use a pre-allocated array and join(' ') instead of string concatenation in a loop.
  // This avoids O(n^2) string building complexity.
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // We mask with 0xFF to ensure we stay within the 0-255 range of our lookup table,
    // which matches the 8-bit behavior of the original implementation.
    const charCode = input.charCodeAt(i) & 0xFF;
    resultArr[i] = binaryLookup[charCode];
  }

  const resultado = resultArr.join(' ');

  // Optimization: Use textContent instead of innerHTML for faster DOM updates and better security.
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
