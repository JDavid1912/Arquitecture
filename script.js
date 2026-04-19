// Precompute lookup table for 8-bit binary strings (0-255) for faster access
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const resultado = [];

  // Optimization: Use a precomputed lookup table and Array.join() to avoid
  // O(n^2) string concatenation and redundant bitwise calculations in a loop.
  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);
    // Mask to 8 bits to match original behavior and use lookup table
    resultado.push(BINARY_LOOKUP[charCode & 0xFF]);
  }

  const finalResult = resultado.join(' ');
  // Optimization: Use textContent instead of innerHTML for better performance and security
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  let caracteres = '';

  for (let i = 0; i < binario.length; i += 8) {
    let byte = binario.substring(i, i + 8); // Optimization: Use substring instead of substr
    let charCode = 0;

    for (let j = 0; j < byte.length; j++) {
      charCode = charCode * 2 + (byte[j] === '1' ? 1 : 0);
    }

    caracteres += String.fromCharCode(charCode);
  }

  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  // Use parseInt with base 2 to convert binary string to decimal
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
