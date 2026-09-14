// Precomputed lookup table for 8-bit binary strings (0 to 255)
// Avoids repeated bit-shifting operations and dynamic string construction in hot loops
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  BINARY_LOOKUP[i] = i.toString(2).padStart(8, '0');
}

/**
 * Converts text input to 8-bit space-separated binary strings.
 * Optimized using precomputed lookup table, array pre-allocation, and textContent DOM updates.
 */
function mostrarBinario() {
  let arreglo = document.getElementById("binario").value;
  let len = arreglo.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    console.log("");
    return;
  }

  // Pre-allocate array for binary representations to avoid repeated string concatenation allocations
  let parts = new Array(len);
  for (let i = 0; i < len; i++) {
    parts[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
  }

  let binarioResultado = parts.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + binarioResultado;
  console.log(binarioResultado);
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
