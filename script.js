// Precompute lookup table for 8-bit character codes to their binary string representation.
// This avoids repeated bitwise operations and string concatenations in the main loop.
const BYTE_TO_BIN = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const length = input.length;
  const resultParts = new Array(length);

  // Using a pre-allocated array and join() is significantly faster than repeated string concatenation.
  for (let i = 0; i < length; i++) {
    // Original implementation only considered the lower 8 bits (j=7 to 0).
    // We maintain this behavior using the lookup table and bitmasking.
    resultParts[i] = BYTE_TO_BIN[input.charCodeAt(i) & 0xFF];
  }

  const resultado = resultParts.join(' ');
  // Using textContent instead of innerHTML for better performance and security.
  document.getElementById("bin").textContent = "El número binario es " + resultado;
  console.log(resultado);
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

  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter() {
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
