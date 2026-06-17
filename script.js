// Precompute binary lookup table for characters 0-255 to speed up conversion.
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  // Pre-allocate array for better performance with large strings.
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    // Use the lookup table for O(1) retrieval. & 0xFF ensures we stay within 0-255.
    result[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  // Join once at the end to avoid O(n^2) string concatenation overhead.
  const finalResult = result.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  // Efficiently process bytes in chunks of 8 bits.
  const numBytes = Math.ceil(len / 8);
  const result = new Array(numBytes);

  for (let i = 0; i < numBytes; i++) {
    const byte = binario.slice(i * 8, (i + 1) * 8);
    // Use native parseInt for faster binary string to number conversion.
    result[i] = String.fromCharCode(parseInt(byte, 2));
  }

  const finalResult = result.join('');
  document.getElementById("bin1").textContent = "El carácter es " + finalResult;
  console.log(finalResult);
}

function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  // Use textContent instead of innerHTML for better performance and security.
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
