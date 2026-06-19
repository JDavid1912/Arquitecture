// Precomputed lookup table for 8-bit binary strings (0-255)
// This avoids repeated calculations and string concatenations in the conversion loop.
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es";
    return;
  }

  // Pre-allocate array for better performance than repeated string concatenation
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    // Use bitmask & 0xFF to ensure we stay within the 0-255 range of our lookup table
    // and to handle potential non-ASCII characters by truncation.
    result[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  // Join once at the end - O(n) complexity vs O(n^2) for repeated string concatenation
  const finalResult = result.join(' ');

  // Use textContent instead of innerHTML for better performance and security
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  let caracteres = '';

  for (let i = 0; i < binario.length; i += 8) {
    let byte = binario.slice(i, i + 8);
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
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
