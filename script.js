/**
 * Lookup table for 8-bit character binary strings.
 * Precomputed to avoid bitwise calculations during conversion.
 */
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  // Pre-allocate array for better performance with large strings
  const resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Use & 0xFF to ensure we stay within the 0-255 range for the lookup table
    resultado[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  const finalResult = resultado.join(' ');
  // Use textContent instead of innerHTML for better performance and security
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  // Pre-allocate array for character accumulation
  const caracteres = new Array(Math.ceil(len / 8));
  let count = 0;

  for (let i = 0; i < len; i += 8) {
    // Use slice instead of deprecated substr
    const byte = binario.slice(i, i + 8);
    // Use parseInt with radix 2 for faster binary decoding
    caracteres[count++] = String.fromCharCode(parseInt(byte, 2));
  }

  const finalResult = caracteres.join('');
  // Use textContent instead of innerHTML
  document.getElementById("bin1").textContent = "El carácter es " + finalResult;
  console.log(finalResult);
}

function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  // Use textContent instead of innerHTML
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
