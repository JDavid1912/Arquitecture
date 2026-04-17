// Precompute a lookup table for ASCII characters to speed up binary conversion
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Converts text input to binary representation.
 * Optimized by using a lookup table and Array.join for efficiency.
 */
function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const length = input.length;
  const result = new Array(length);

  for (let i = 0; i < length; i++) {
    const charCode = input.charCodeAt(i);
    // Use lookup table for ASCII, fallback to toString(2) for Unicode
    result[i] = charCode < 256 ? binaryLookup[charCode] : charCode.toString(2).padStart(8, '0');
  }

  const resultado = result.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + resultado;
  console.log(resultado);
}

/**
 * Legacy function for binary to character conversion from a specific input.
 * Optimized to match the new performance standards.
 */
function mostrarBinario1() {
  const binario = document.getElementById("binario1")?.value || "";
  const characters = binaryToText(binario);
  document.getElementById("bin1").textContent = "El carácter es " + characters;
  console.log(characters);
}

/**
 * Converts binary input back to characters.
 * Handles multiple 8-bit segments and uses Array.join for better performance with large inputs.
 */
function mostrarCaracter() {
  const binario = document.getElementById("caracter").value;
  const characters = binaryToText(binario);
  document.getElementById("bin1").textContent = "El carácter es " + characters;
  console.log(characters);
}

/**
 * Helper to convert binary string to text efficiently.
 */
function binaryToText(binario) {
  const bytes = binario.match(/[01]{8}/g) || [];
  const length = bytes.length;
  const result = new Array(length);

  for (let i = 0; i < length; i++) {
    result[i] = String.fromCharCode(parseInt(bytes[i], 2));
  }

  return result.join('');
}
