// Precomputed lookup table for byte-to-binary mapping (0-255)
// This avoids expensive bitwise operations and string concatenations in loops.
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  const result = new Array(len);

  // Using a precomputed lookup table and Array.join() is significantly faster
  // than manual bit manipulation and string concatenation for large inputs.
  for (let i = 0; i < len; i++) {
    // We use & 0xFF to handle standard ASCII/Extended ASCII range (0-255)
    const charCode = input.charCodeAt(i) & 0xFF;
    result[i] = binaryLookup[charCode];
  }

  const finalString = result.join(' ');
  document.getElementById("bin").innerHTML = "El número binario es " + finalString;
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
