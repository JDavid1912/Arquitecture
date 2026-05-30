// Precomputed lookup table for 8-bit binary strings (0-255)
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  let len = arreglo.length;
  // Pre-allocating array is more efficient for large inputs
  let resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Use bitmask 0xFF to ensure charCode is within 0-255 for lookup
    resultado[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
  }

  // Using Array.join(' ') is faster than string concatenation in a loop
  const finalResult = resultado.join(' ');
  // textContent is faster and more secure than innerHTML
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  let len = binario.length;
  // Using an array to collect characters and joining at the end is more efficient
  let result = new Array(Math.ceil(len / 8));

  for (let i = 0, k = 0; i < len; i += 8, k++) {
    let charCode = 0;
    // Process 8 bits to form a byte
    const end = Math.min(i + 8, len);
    for (let j = i; j < end; j++) {
      // Bitwise shift and OR is faster than multiplication for base-2 conversion
      charCode = (charCode << 1) | (binario[j] === '1' ? 1 : 0);
    }
    result[k] = String.fromCharCode(charCode);
  }

  const finalResult = result.join('');
  // textContent is faster and more secure than innerHTML
  document.getElementById("bin1").textContent = "El carácter es " + finalResult;
  console.log(finalResult);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  // textContent is faster and more secure than innerHTML
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
