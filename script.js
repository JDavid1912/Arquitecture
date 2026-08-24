// Pre-computed lookup table for 8-bit binary representation of character codes (0-255).
// Initializing globally avoids repeated recalculations during string conversion.
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  let len = arreglo.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    console.log("");
    return;
  }

  // Pre-allocate array to avoid O(n^2) string concatenation in loop
  let result = new Array(len);
  for (let i = 0; i < len; i++) {
    // & 0xFF masks to 8-bit, matching original truncation behavior
    result[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  let finalBinary = result.join(' ');
  // Use textContent instead of innerHTML to avoid HTML parsing overhead and improve security
  document.getElementById("bin").textContent = "El número binario es " + finalBinary;
  console.log(finalBinary);
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
