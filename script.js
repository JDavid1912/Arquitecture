// Global binary lookup table for characters 0-255 to avoid redundant bitwise calculations
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

/**
 * Optimizes character-to-binary conversion.
 * Bottlenecks addressed:
 * 1. Replaced nested bitwise loop with O(1) lookup table.
 * 2. Replaced O(n^2) string concatenation with pre-allocated array and join().
 * 3. Replaced innerHTML with textContent for performance and security.
 */
function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;

  // Early return if input is empty to match original behavior
  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    console.log("");
    return;
  }

  // Pre-allocate array for better performance with large inputs
  const resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Original code effectively truncated to 8 bits by only looping 7 down to 0
    const charCode = input.charCodeAt(i) & 0xFF;
    resultado[i] = binaryLookup[charCode];
  }

  // join(' ') is significantly faster than repeated string concatenation
  document.getElementById("bin").textContent = "El número binario es " + resultado.join(' ');
  console.log(resultado.join(' '));
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
