// Precompute a binary lookup table for characters (0-255) to speed up conversion.
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  let len = arreglo.length;
  // Pre-allocate array for better performance with large inputs.
  let resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Truncate to 8 bits to match original behavior and use the lookup table.
    let charCode = arreglo.charCodeAt(i) & 0xFF;
    resultado[i] = binaryLookup[charCode];
  }

  // Use Array.join(' ') to avoid O(n^2) string concatenation in the loop.
  let finalResult = resultado.join(' ');
  // Use textContent instead of innerHTML for better performance and security.
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  let len = binario.length;
  // Pre-allocate array for better performance with large inputs.
  let resultArr = new Array(Math.ceil(len / 8));
  let count = 0;

  for (let i = 0; i < len; i += 8) {
    // Use slice instead of deprecated substr.
    let byte = binario.slice(i, i + 8);
    let charCode = 0;
    // Manual loop is faster than parseInt(byte, 2) in this environment.
    for (let j = 0; j < byte.length; j++) {
      charCode = (charCode << 1) | (byte[j] === '1' ? 1 : 0);
    }
    resultArr[count++] = String.fromCharCode(charCode);
  }

  // Use Array.join('') to avoid O(n^2) string concatenation.
  let caracteres = resultArr.join('');
  // Use textContent instead of innerHTML for better performance and security.
  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  // Use textContent instead of innerHTML for consistency and better performance.
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
