// Precomputed lookup table for 8-bit binary strings (0-255).
// This avoids repeated bitwise operations and string padding during conversion.
const BYTE_TO_BIN = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

// Precomputed reverse lookup table for 8-bit binary to character conversion.
// This significantly speeds up binary-to-text decoding by avoiding repeated parsing in hot paths.
const BIN_TO_CHAR = Object.fromEntries(BYTE_TO_BIN.map((bin, i) => [bin, String.fromCharCode(i)]));

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;
  // Pre-allocate array to avoid memory overhead from frequent resizing during large string builds.
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmask with 0xFF ensures the character code is within the 0-255 range for our lookup table.
    resultArr[i] = BYTE_TO_BIN[input.charCodeAt(i) & 0xFF];
  }

  // Join once at the end to avoid O(n^2) performance hit from repeated string concatenation.
  const finalResult = resultArr.join(' ');
  // textContent is faster and more secure than innerHTML for updating text-only content.
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  let caracteres = '';

  // Process input in 8-bit chunks to leverage precomputed character mapping.
  for (let i = 0; i < binario.length; i += 8) {
    const byte = binario.substring(i, i + 8);
    // Use lookup table for complete bytes, fallback to parseInt for trailing bits if any.
    if (byte.length === 8) {
      caracteres += BIN_TO_CHAR[byte] || String.fromCharCode(parseInt(byte, 2));
    } else {
      caracteres += String.fromCharCode(parseInt(byte, 2));
    }
  }

  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter() {
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  // Consistent use of textContent for DOM updates.
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
