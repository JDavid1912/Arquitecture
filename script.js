// Precomputed 8-bit binary lookup table for performance optimization
// This avoids expensive bitwise operations and string building during conversion
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  let input = document.getElementById("binario").value;
  let len = input.length;
  // Pre-allocating the array for optimal performance with large inputs
  let binaryArray = new Array(len);

  for (let i = 0; i < len; i++) {
    // Character codes are masked to 8-bit for lookup table safety
    binaryArray[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  // join(' ') is significantly faster than repeated string concatenation in loops
  const result = binaryArray.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + result;
  console.log(result);
}

function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  let len = binario.length;
  // Pre-allocating the array for optimal performance
  let charsArray = new Array(Math.ceil(len / 8));
  let count = 0;

  for (let i = 0; i < len; i += 8) {
    // slice is preferred over deprecated substr
    let byte = binario.slice(i, i + 8);
    let charCode = 0;

    // Bitwise approach preserved as it's faster than parseInt in this environment
    for (let j = 0; j < byte.length; j++) {
      charCode = (charCode << 1) | (byte[j] === '1' ? 1 : 0);
    }

    charsArray[count++] = String.fromCharCode(charCode);
  }

  const result = charsArray.join('');
  document.getElementById("bin1").textContent = "El carácter es " + result;
  console.log(result);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  // Using textContent for better performance and security
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
