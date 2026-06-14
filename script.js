// Precomputed lookup table for 8-bit binary strings (0-255).
// This provides O(1) retrieval and avoids repeated bitwise calculations.
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;

  // Pre-allocating the array avoids the O(n^2) performance hit of repeated string concatenation.
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    // Use & 0xFF to ensure the charCode is within the 0-255 range of our lookup table.
    result[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  const finalResult = result.join(' ');

  // textContent is preferred over innerHTML for better performance and security (XSS prevention).
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
  // Consistent use of textContent for DOM updates.
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
