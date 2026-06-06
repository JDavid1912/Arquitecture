// Precomputed lookup table for 8-bit binary strings (0-255)
// This avoids repeated bitwise operations and string conversions during execution.
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;

  // Optimization: Use a pre-allocated array and join(' ') to avoid O(n^2) string concatenation.
  // This is significantly faster for large inputs.
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    // Optimization: Use the precomputed lookup table.
    // charCodeAt(i) & 0xFF ensures we only handle the lower 8 bits, consistent with original behavior.
    result[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  const finalResult = result.join(' ');

  // Optimization: Use textContent instead of innerHTML for better performance and security.
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;

  // Optimization: Use a pre-allocated array for characters and join('') for efficiency.
  const resultLen = Math.ceil(len / 8);
  const result = new Array(resultLen);

  for (let i = 0; i < len; i += 8) {
    const byte = binario.slice(i, i + 8);
    // Using parseInt(byte, 2) is highly optimized in modern JS engines.
    result[i / 8] = String.fromCharCode(parseInt(byte, 2));
  }

  const finalResult = result.join('');
  document.getElementById("bin1").textContent = "El carácter es " + finalResult;
  console.log(finalResult);
}

function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
