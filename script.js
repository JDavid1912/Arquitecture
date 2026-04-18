// Precompute a lookup table for 8-bit binary strings (0-255)
// This avoids bitwise calculations and padding during runtime.
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  BINARY_LOOKUP[i] = i.toString(2).padStart(8, '0');
}

/**
 * Optimizes the conversion of characters to binary strings.
 * ⚡ Bolt: Uses a lookup table and Array.join() for O(n) performance,
 * avoiding O(n^2) string concatenation in loops.
 */
function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  const resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Only handle 8-bit characters for this binary representation
    const charCode = input.charCodeAt(i) & 0xFF;
    resultado[i] = BINARY_LOOKUP[charCode];
  }

  const outputString = resultado.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + outputString;
  console.log(outputString);
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
