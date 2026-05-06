// Precomputed lookup table for 8-bit binary strings (0-255)
// This avoids repeated bitwise operations and string padding during conversion.
const lookupTable = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const input = document.getElementById("binario");
  const text = input.value;
  const len = text.length;
  const resultado = new Array(len);

  // Using a pre-allocated array and join(' ') is faster than O(n^2) string concatenation.
  for (let i = 0; i < len; i++) {
    // Bitmask with 0xFF to ensure we only look up valid 8-bit values.
    resultado[i] = lookupTable[text.charCodeAt(i) & 0xFF];
  }

  const finalString = resultado.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + finalString;
  console.log(finalString);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  const result = [];

  // Optimization: Use parseInt(byte, 2) and Array.join('') for efficiency.
  for (let i = 0; i < len; i += 8) {
    const byte = binario.substring(i, i + 8);
    if (byte.length > 0) {
      result.push(String.fromCharCode(parseInt(byte, 2)));
    }
  }

  const finalChars = result.join('');
  document.getElementById("bin1").textContent = "El carácter es " + finalChars;
  console.log(finalChars);
}

function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  // Optimization: use textContent instead of innerHTML.
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
