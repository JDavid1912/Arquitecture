// Pre-computed lookup table for character codes (0-255) to 8-bit binary string
// This provides O(1) retrieval for binary strings, bypassing expensive bitwise loops.
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  let binStr = '';
  for (let j = 7; j >= 0; j--) {
    binStr += (i & (1 << j)) ? '1' : '0';
  }
  binaryLookup[i] = binStr;
}

function mostrarBinario(){
  const inputVal = document.getElementById("binario").value;
  const len = inputVal.length;

  // Early return for empty input to match original behavior and avoid unnecessary processing
  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Pre-allocate array for optimal performance with large string arrays
  // as per the repository design guidelines and memory learnings.
  const outputArray = new Array(len);
  for (let i = 0; i < len; i++) {
    // Truncating to 0xFF to safely query the lookup table and ensure exact behavioral
    // matching for all characters, including non-ASCII.
    outputArray[i] = binaryLookup[inputVal.charCodeAt(i) & 0xFF];
  }

  // Use Array.join(' ') which is significantly faster than O(n^2) string concatenation.
  const resultado = outputArray.join(' ');

  // Update DOM using textContent which is faster and safer than innerHTML.
  // We also remove the console.log call as it heavily blocks the main thread with large inputs.
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
