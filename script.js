// Precomputed lookup table for 8-bit binary representation (0-255)
// This avoids repeated bitwise operations and string padding during conversion.
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;
  // Pre-allocating the array is faster than push() for large strings.
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmasking with 0xFF ensures we only use the lower 8 bits,
    // maintaining consistency with the original 8-bit loop logic.
    result[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  // join(' ') is significantly faster than repeated string concatenation in a loop.
  const finalResult = result.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  let caracteres = '';

  for (let i = 0; i < binario.length; i += 8) {
    let byte = binario.substr(i, 8);
    let charCode = 0;

    for (let j = 0; j < byte.length; j++) {
      charCode = charCode * 2 + (byte[j] === '1' ? 1 : 0);
    }

    caracteres += String.fromCharCode(charCode);
  }

  document.getElementById("bin1").innerHTML = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
