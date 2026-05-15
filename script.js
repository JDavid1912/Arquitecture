// Precompute binary lookup table for 8-bit characters (0-255)
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  // Pre-allocating array size is more efficient than pushing or string concatenation
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    // Use charCodeAt and the lookup table for O(1) character-to-binary conversion
    // Masking with 0xFF ensures it stays within the 0-255 range
    result[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  const finalResult = result.join(' ');
  // textContent is faster and safer than innerHTML
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  const result = [];

  for (let i = 0; i < len; i += 8) {
    const byte = binario.substring(i, i + 8);
    result.push(String.fromCharCode(parseInt(byte, 2)));
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
