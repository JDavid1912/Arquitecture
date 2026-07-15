// Pre-calculated lookup table for 8-bit binary strings (0-255)
// This avoids repeated bitwise operations and string padding during conversion.
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

/**
 * Converts text input to its binary representation.
 * Optimized for performance using a lookup table and Array.join().
 */
function mostrarBinario(){
  const input = document.getElementById("binario").value;
  if (!input) {
    document.getElementById("bin").textContent = "El número binario es ";
    console.log("");
    return;
  }

  const len = input.length;
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Use & 0xFF to ensure we stay within the 0-255 range,
    // mimicking the original code's 8-bit truncation behavior.
    const charCode = input.charCodeAt(i) & 0xFF;
    resultArr[i] = BINARY_LOOKUP[charCode];
  }

  const result = resultArr.join(' ');
  // textContent is faster and more secure than innerHTML
  document.getElementById("bin").textContent = "El número binario es " + result;
  console.log(result);
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
