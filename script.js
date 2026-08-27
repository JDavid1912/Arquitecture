// Precomputed 8-bit binary string lookup table for char codes 0 to 255.
// Using a lookup table avoids repeated bitwise loops and string formatting per character.
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  BINARY_LOOKUP[i] = i.toString(2).padStart(8, '0');
}

/**
 * Converts text input into space-separated 8-bit binary string representation.
 * Optimized with a precomputed lookup table, pre-allocated array joins,
 * and textContent DOM updates.
 */
function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;

  if (!arreglo) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  const len = arreglo.length;
  const parts = new Array(len);

  for (let i = 0; i < len; i++) {
    // Truncate charCode to 8 bits (& 0xFF) for consistency with 8-bit output format
    parts[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
  }

  let resultado = parts.join(' ');

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
