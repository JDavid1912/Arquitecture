// Precompute lookup table for 8-bit binary strings to avoid redundant calculations
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));
// Precompute reverse lookup for decoding 8-bit binary strings
const REVERSE_LOOKUP = {};
BINARY_LOOKUP.forEach((bin, i) => { REVERSE_LOOKUP[bin] = String.fromCharCode(i); });

function mostrarBinario(){
  const arreglo = document.getElementById("binario").value;
  const len = arreglo.length;
  // Pre-allocate array to avoid dynamic resizing overhead for large strings
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    // Use lookup table and bitmask to ensure 8-bit range (matches original logic)
    // This is significantly faster than nested loops and bitwise ops in JS
    result[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
  }

  // Join once at the end to avoid O(n^2) string concatenation performance hit
  const finalResult = result.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  const result = [];

  for (let i = 0; i < len; i += 8) {
    const byte = binario.substring(i, i + 8);
    // Using a lookup table for exact 8-bit matches is faster than parseInt
    if (byte.length === 8) {
      result.push(REVERSE_LOOKUP[byte] || String.fromCharCode(parseInt(byte, 2)));
    } else {
      result.push(String.fromCharCode(parseInt(byte, 2)));
    }
  }

  const finalResult = result.join('');
  document.getElementById("bin1").textContent = "El carácter es " + finalResult;
  console.log(finalResult);
}

function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  // Use textContent for better performance and security than innerHTML
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
