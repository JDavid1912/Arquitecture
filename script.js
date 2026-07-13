// Lookup table for 8-bit binary strings (0-255)
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Optimizes character to binary conversion using a lookup table and pre-allocated array.
 * Replaces O(n^2) string concatenation with O(n) array join.
 * Estimated speedup: ~5-10x for large strings.
 */
function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  const resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Truncate to 8-bit to ensure it stays within lookup table bounds
    // consistent with original bitwise implementation (charCode & (1 << j))
    const charCode = input.charCodeAt(i) & 0xFF;
    resultado[i] = binaryLookup[charCode];
  }

  // Use textContent for better performance and security than innerHTML
  document.getElementById("bin").textContent = "El número binario es " + resultado.join(' ');
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
  document.getElementById("bin1").innerHTML = "El carácter es " + caracter;
}
