// Precomputed lookup table for 8-bit binary strings to speed up character-to-binary conversion
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  let len = arreglo.length;
  // Pre-allocate array for better performance with large inputs
  let resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Use lookup table and bitmask to ensure 8-bit representation (truncates non-ASCII)
    resultado[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  const finalResult = resultado.join(' ');
  // textContent is faster than innerHTML and prevents XSS
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  let binario = document.getElementById("binario1").value;
  let len = binario.length;
  // Pre-allocate array for characters (one char per 8 bits)
  let caracteres = new Array(Math.ceil(len / 8));

  for (let i = 0; i < len; i += 8) {
    // Using slice instead of substr (deprecated) and parseInt for native conversion speed
    let byte = binario.slice(i, i + 8);
    caracteres[i / 8] = String.fromCharCode(parseInt(byte, 2));
  }

  const finalResult = caracteres.join('');
  document.getElementById("bin1").textContent = "El carácter es " + finalResult;
  console.log(finalResult);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
