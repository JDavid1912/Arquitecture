// Precomputed lookup table for byte-to-binary mapping
const LOOKUP_TABLE = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Converts input text to its binary representation.
 * Optimized with a lookup table and Array.join for performance.
 */
function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;
  const resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // We use & 0xFF to ensure we only deal with the lower 8 bits (one byte)
    const charCode = input.charCodeAt(i) & 0xFF;
    resultado[i] = LOOKUP_TABLE[charCode];
  }

  const finalResult = resultado.join(' ');
  // Use textContent instead of innerHTML for better performance and security
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").innerHTML = "El carácter es " + caracter;
}
