// Precompute binary strings for 0-255 for faster lookups
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Converts input text to binary representation.
 * Optimized with a lookup table and Array.join to avoid O(n^2) string concatenation.
 */
function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const output = document.getElementById("bin");
  const len = input.length;
  const results = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmasking with 0xFF ensures we stay within the 0-255 range of our lookup table
    results[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  const resultado = results.join(' ');
  // textContent is faster and more secure than innerHTML
  output.textContent = "El número binario es " + resultado;
  console.log(resultado);
}

/**
 * Converts binary string to characters.
 * Optimized with parseInt and textContent.
 */
function mostrarBinario1() {
  const input = document.getElementById("binario1").value;
  const output = document.getElementById("bin1");
  let caracteres = '';

  for (let i = 0; i < input.length; i += 8) {
    const byte = input.substring(i, i + 8);
    // parseInt with radix 2 is highly optimized in modern engines
    const charCode = parseInt(byte, 2);

    if (!isNaN(charCode)) {
      caracteres += String.fromCharCode(charCode);
    }
  }

  output.textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

/**
 * Converts a single binary sequence to its character representation.
 */
function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
