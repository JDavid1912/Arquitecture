// Precompute binary lookup table for performance
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmask with 0xFF to handle only the lower 8 bits (standard ASCII/Extended ASCII)
    // as per the original 8-bit loop logic.
    result[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  const output = result.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + output;
  console.log(output);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  const result = [];

  for (let i = 0; i < len; i += 8) {
    const byte = binario.substring(i, i + 8);
    const charCode = parseInt(byte, 2);

    if (!isNaN(charCode)) {
      result.push(String.fromCharCode(charCode));
    }
  }

  const output = result.join('');
  document.getElementById("bin1").textContent = "El carácter es " + output;
  console.log(output);
}

function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  if (isNaN(decimal)) {
    document.getElementById("bin1").textContent = "Entrada inválida";
    return;
  }
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
