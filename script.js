// Precomputed lookup table for character-to-binary conversion (0-255).
// This avoids bitwise calculations and padding during conversion.
const LOOKUP_BINARIO = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;
  // Pre-allocate array for better memory efficiency.
  const resultadoArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Masking with 0xFF ensures we stay within the 0-255 range for the lookup table.
    // Standard ASCII/Latin-1 is 8-bit.
    resultadoArr[i] = LOOKUP_BINARIO[input.charCodeAt(i) & 0xFF];
  }

  // join(' ') is much more efficient than repeated string concatenation in a loop.
  const resultado = resultadoArr.join(' ');
  // textContent is faster and safer than innerHTML for plain text updates.
  document.getElementById("bin").textContent = "El número binario es " + resultado;
  console.log(resultado);
}

// Precomputed reverse lookup table for 8-bit binary strings to characters.
const LOOKUP_CARACTER = Object.fromEntries(LOOKUP_BINARIO.map((bin, i) => [bin, String.fromCharCode(i)]));

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  const resultadoArr = [];

  for (let i = 0; i < len; i += 8) {
    const byte = binario.substring(i, i + 8);
    // Use the reverse lookup table for fast decoding.
    // Fallback to manual parsing if the byte is not in the table (e.g., incomplete byte).
    resultadoArr.push(LOOKUP_CARACTER[byte] || String.fromCharCode(parseInt(byte, 2)));
  }

  const caracteres = resultadoArr.join('');
  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter() {
  const binario = document.getElementById("caracter").value;
  // Direct conversion for single binary input.
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
