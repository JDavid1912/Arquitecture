// Global lookup table for 8-bit binary representation of character codes 0 to 255.
// Pre-calculating this table avoids running bitwise nested loops during conversion.
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  binaryLookup[i] = bin;
}

/**
 * Converts a text string input into its 8-bit binary string representation.
 * Optimized with a global lookup table, pre-allocated array, and .textContent
 * to prevent performance bottlenecks on larger input strings.
 */
function mostrarBinario(){
  const inputVal = document.getElementById("binario").value;

  // Early return if input is empty to match original prefix text output structure
  if (!inputVal) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  const len = inputVal.length;
  const resultArr = new Array(len);

  // Use a standard for-loop and pre-allocated array for maximum performance.
  // We apply `& 0xFF` to replicate original 8-bit truncation behavior for non-ASCII characters.
  for (let i = 0; i < len; i++) {
    resultArr[i] = binaryLookup[inputVal.charCodeAt(i) & 0xFF];
  }

  // Update DOM using textContent instead of innerHTML for speed and security
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
