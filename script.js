// Precomputed 8-bit binary lookup table for performance
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const inputElement = document.getElementById("binario");
  const value = inputElement.value;
  const len = value.length;
  // Pre-allocate array to avoid resizing during iteration
  const resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    const charCode = value.charCodeAt(i);
    // Use O(1) lookup for common 8-bit characters, fallback for higher values
    resultado[i] = charCode < 256 ? binaryLookup[charCode] : charCode.toString(2).padStart(8, '0');
  }

  // Join once at the end to avoid O(n^2) string concatenation
  const finalResult = resultado.join(' ');
  // Use textContent instead of innerHTML for better performance and security
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  const binaryString = document.getElementById("binario1").value;
  const len = binaryString.length;
  const resultChars = [];

  // Process 8 bits at a time
  for (let i = 0; i < len; i += 8) {
    // Use slice instead of deprecated substr
    const byte = binaryString.slice(i, i + 8);
    // Use native parseInt(byte, 2) which is highly optimized
    const charCode = parseInt(byte, 2);

    if (!isNaN(charCode)) {
      resultChars.push(String.fromCharCode(charCode));
    }
  }

  const finalChars = resultChars.join('');
  document.getElementById("bin1").textContent = "El carácter es " + finalChars;
  console.log(finalChars);
}

function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
