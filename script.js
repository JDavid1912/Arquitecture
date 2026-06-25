// Precomputed lookup table for 8-bit binary strings (0-255)
// This avoids repeated bitwise operations and string building for each character.
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  if (!input) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  const len = input.length;
  // Performance: Pre-allocating an array and using .join(' ') is much faster than
  // O(n^2) string concatenation in a loop for large inputs.
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Masking with 0xFF ensures we only take the last 8 bits, matching original behavior
    // and allowing us to use the O(1) lookup table.
    resultArr[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  const finalResult = resultArr.join(' ');

  // Performance & Security: textContent is faster than innerHTML as it skips HTML parsing.
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
  document.getElementById("bin1").innerHTML = "El carácter es " + caracter;
}
