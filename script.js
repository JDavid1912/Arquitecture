/**
 * Precomputed lookup table for 8-bit binary strings (0-255).
 * This avoids redundant bitwise calculations during text-to-binary conversion.
 */
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;

  // Use a pre-allocated array and join(' ') to avoid O(n^2) string concatenation overhead.
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmasking with 0xFF ensures we stay within the 0-255 range of our lookup table,
    // mirroring the original 8-bit truncation behavior for non-ASCII characters.
    result[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  const finalResult = result.join(' ');

  // Using textContent is faster and more secure than innerHTML when no HTML parsing is needed.
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;

  // Array joining is generally faster than string concatenation for large strings in JS engines.
  const numBytes = Math.ceil(len / 8);
  const result = new Array(numBytes);

  for (let i = 0; i < numBytes; i++) {
    const start = i * 8;
    const byte = binario.slice(start, start + 8);
    let charCode = 0;

    // Fast bitwise accumulation for binary to decimal conversion.
    for (let j = 0; j < byte.length; j++) {
      charCode = (charCode << 1) | (byte[j] === '1' ? 1 : 0);
    }

    result[i] = String.fromCharCode(charCode);
  }

  const caracteres = result.join('');
  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter() {
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
