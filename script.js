// Precompute binary lookup table for performance (0-255) to avoid redundant calculations
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Optimized character-to-binary conversion.
 * Uses a lookup table and array joining to achieve O(n) performance,
 * avoiding the O(n^2) bottleneck of repeated string concatenation.
 */
function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;

  // Pre-allocate array for better performance than repeated string concatenation
  const binaryArray = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmask with 0xFF to ensure the char code is within 0-255 range for the lookup table.
    // This replicates the original code's 8-bit truncation behavior.
    binaryArray[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  // Use Array.join for efficient string construction
  const resultado = binaryArray.join(' ');

  // Use textContent instead of innerHTML for better performance and security
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
