// Global lookup table for 8-bit binary representation of character codes 0-255.
// Pre-computing this once avoids expensive bitwise operations in the main loop.
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  binaryLookup[i] = bin;
}

/**
 * Converts the input text character-by-character into its 8-bit binary representation.
 * Optimized for performance:
 * - Uses a precomputed lookup table to eliminate bitwise loops.
 * - Pre-allocates a fixed-size array instead of doing repetitive string concatenation (O(n^2)).
 * - Uses .textContent instead of .innerHTML for faster and safer DOM updates.
 */
function mostrarBinario() {
  const inputVal = document.getElementById("binario").value;
  const len = inputVal.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    console.log("");
    return;
  }

  // Pre-allocating the array avoids dynamic resizing overhead.
  const resultado = new Array(len);
  for (let i = 0; i < len; i++) {
    // Masking with 0xFF ensures we only index within 0-255, preserving truncation behavior.
    resultado[i] = binaryLookup[inputVal.charCodeAt(i) & 0xFF];
  }

  const output = resultado.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + output;
  console.log(output);
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
