// Precomputed lookup table for character-to-binary conversion (0-255 range)
// This avoids repeated bitwise operations and string building in loops.
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

// Precomputed reverse lookup table for binary-to-character conversion
const charLookup = {};
binaryLookup.forEach((bin, i) => { charLookup[bin] = String.fromCharCode(i); });

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  // Pre-allocate array for better memory efficiency with large inputs
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Use lookup table and bitmask to ensure we stay in 0-255 range (standard ASCII/Extended)
    // This is significantly faster than calculating the binary string manually.
    resultArr[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  // Array.join(' ') is O(n) while repeated string concatenation can be O(n^2)
  const resultado = resultArr.join(' ');

  // textContent is faster and more secure than innerHTML
  document.getElementById("bin").textContent = "El número binario es " + resultado;
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  // Pre-allocate array for the resulting characters
  const resultArr = new Array(Math.ceil(len / 8));

  for (let i = 0, j = 0; i < len; i += 8, j++) {
    const byte = binario.slice(i, i + 8);
    // Use reverse lookup table for O(1) byte-to-char conversion
    resultArr[j] = charLookup[byte] || String.fromCharCode(parseInt(byte, 2));
  }

  const resultado = resultArr.join('');
  document.getElementById("bin1").textContent = "El carácter es " + resultado;
}

function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  // Consistent use of textContent for performance and security
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
