// Pre-calculate 8-bit binary strings for characters 0-255 for O(1) lookup
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Converts the input text to its binary representation.
 * Optimized with a lookup table and array join for O(n) performance.
 */
function mostrarBinario() {
  const input = document.getElementById("binario").value;
  if (!input) {
    document.getElementById("bin").textContent = "El número binario es";
    return;
  }

  const len = input.length;
  const resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Use & 0xFF to ensure we stay within 0-255 range (matching 8-bit behavior)
    resultado[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  const finalString = resultado.join(' ');
  // Use textContent instead of innerHTML for better performance and security
  document.getElementById("bin").textContent = "El número binario es " + finalString;
  console.log(finalString);
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
