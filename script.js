// Pre-calculated global lookup table for O(1) binary string conversions (characters 0 to 255)
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  BINARY_LOOKUP[i] = bin;
}

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;

  // Early return for empty input to preserve original behavior
  if (!arreglo) {
    document.getElementById("bin").textContent = "El número binario es";
    console.log("");
    return;
  }

  let len = arreglo.length;
  let resultadoArreglo = new Array(len);

  // Convert each character to binary representation using O(1) lookup-table and standard loop
  for (let i = 0; i < len; i++) {
    // Truncating with & 0xFF matches original behavior for non-ASCII characters
    let charCode = arreglo.charCodeAt(i) & 0xFF;
    resultadoArreglo[i] = BINARY_LOOKUP[charCode];
  }

  let resultado = resultadoArreglo.join(' ');

  // Update text content with textContent for optimal performance and safety over innerHTML
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
