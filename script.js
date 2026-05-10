// Precompute binary representation for all 256 possible ASCII characters
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Optimized: Use precomputed lookup table and avoid bitwise calculations in loop
    // & 0xFF ensures we stay within the 0-255 range of our lookup table
    resultArr[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  // Optimized: Use join(' ') instead of string concatenation to avoid O(n^2) complexity
  const resultado = resultArr.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + resultado;
  console.log(resultado);
}

function mostrarBinario1() {
  const binarioStr = document.getElementById("binario1") ? document.getElementById("binario1").value : "";
  const resultArr = [];

  for (let i = 0; i < binarioStr.length; i += 8) {
    const byte = binarioStr.substring(i, i + 8);
    if (byte.length === 0) break;
    // Optimized: Use parseInt with base 2 instead of manual bit manipulation
    resultArr.push(String.fromCharCode(parseInt(byte, 2)));
  }

  // Optimized: Use join('') instead of string concatenation
  const caracteres = resultArr.join('');
  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter() {
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  // Optimized: Use textContent for better performance and security
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
