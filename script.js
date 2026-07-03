// Precompute binary lookup table for performance (0-255)
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

/**
 * Converts text input to its binary representation.
 * Optimized with a lookup table and pre-allocated array join for O(n) performance.
 */
function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;

  // Early return for empty input
  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Pre-allocate array for efficiency
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmasking with 0xFF ensures we only process the lower 8 bits,
    // consistent with the original 8-bit conversion logic.
    resultArr[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  const resultado = resultArr.join(' ');

  // Use textContent instead of innerHTML for better performance and security
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

  document.getElementById("bin1").innerHTML = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").innerHTML = "El carácter es " + caracter;
}
