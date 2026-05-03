// Precompute binary representation for all 256 possible 8-bit characters
const LOOKUP_TABLE = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Converts input text to its binary representation.
 * Optimization: Uses a lookup table and Array.join for O(n) performance.
 */
function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  const resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmasking with 0xFF ensures we only handle 8-bit characters, matching original behavior
    resultado[i] = LOOKUP_TABLE[input.charCodeAt(i) & 0xFF];
  }

  const finalString = resultado.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + finalString;
  console.log(finalString);
}

/**
 * Converts binary string to characters.
 * Optimization: Uses parseInt and textContent.
 */
function mostrarBinario1() {
  const binario = document.getElementById("binario1")?.value || "";
  const len = binario.length;
  const result = new Array(Math.ceil(len / 8));
  let count = 0;

  for (let i = 0; i < len; i += 8) {
    const byte = binario.substring(i, i + 8);
    result[count++] = String.fromCharCode(parseInt(byte, 2));
  }

  const caracteres = result.join('');
  const outputElement = document.getElementById("bin1");
  if (outputElement) {
    outputElement.textContent = "El carácter es " + caracteres;
  }
  console.log(caracteres);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
