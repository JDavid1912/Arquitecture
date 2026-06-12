// Precompute lookup table for 0-255 to speed up character to binary conversion.
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  const len = arreglo.length;

  // Pre-allocate array to avoid resizing and use a single join at the end
  // to prevent O(n^2) performance issues with string concatenation in the loop.
  const resultadoArreglo = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmask with 0xFF ensures the index stays within the 0-255 lookup table range,
    // maintaining consistency with 8-bit character conversion.
    resultadoArreglo[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  const resultado = resultadoArreglo.join(' ');

  // Use textContent instead of innerHTML for better performance and security
  // when injecting text that doesn't contain HTML tags.
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
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
