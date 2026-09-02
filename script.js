// Pre-computed lookup table for 8-bit binary strings (0 to 255)
// Avoids repeated bitwise loops and padStart execution during conversion
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  if (!arreglo.length) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Pre-allocate array for fast character mapping and join instead of O(N^2) string concatenation
  const len = arreglo.length;
  const parts = new Array(len);
  for (let i = 0; i < len; i++) {
    parts[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  const resultado = parts.join(' ');
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
