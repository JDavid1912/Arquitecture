// Precomputed lookup table for 8-bit binary strings (0-255)
// This avoids repeated toString(2) and padStart calls during conversion.
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  if (!arreglo) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  let len = arreglo.length;
  let result = new Array(len);

  for (let i = 0; i < len; i++) {
    // We use & 0xFF to ensure we stay within the 0-255 range of our lookup table.
    // This also handles non-ASCII characters by truncating them to their last 8 bits,
    // matching the behavior of the original bitwise implementation.
    let charCode = arreglo.charCodeAt(i) & 0xFF;
    result[i] = binaryLookup[charCode];
  }

  const finalResult = result.join(' ');

  // Use textContent for better performance and security than innerHTML
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
