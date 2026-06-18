// Precompute a lookup table for 8-bit binary representations (0-255)
// This avoids manual bit manipulation and repeated string building during conversion.
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  // Use a pre-allocated array for better performance when collecting results
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmasking with 0xFF ensures we stay within the 0-255 range of our lookup table,
    // mirroring the original behavior for 8-bit conversion.
    result[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  // Join once at the end to avoid O(n^2) string concatenation overhead.
  const finalResult = result.join(' ');

  // Use textContent instead of innerHTML for faster DOM updates and better security.
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  // Pre-calculate expected number of characters
  const result = new Array(Math.ceil(len / 8));
  let count = 0;

  for (let i = 0; i < len; i += 8) {
    // slice() is preferred over the deprecated substr()
    const byte = binario.slice(i, i + 8);
    // parseInt with radix 2 is highly optimized in modern engines
    result[count++] = String.fromCharCode(parseInt(byte, 2));
  }

  const finalResult = result.join('');
  document.getElementById("bin1").textContent = "El carácter es " + finalResult;
  console.log(finalResult);
}

function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  // Direct conversion for a single binary string
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
