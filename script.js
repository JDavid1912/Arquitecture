// Pre-computed 256-element lookup table mapping byte values (0-255) to 8-bit binary strings
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;

  // Handle empty input edge case early to avoid extra processing
  if (!arreglo) {
    document.getElementById("bin").textContent = "El número binario es ";
    console.log('');
    return;
  }

  // Performance Optimization: Use pre-allocated array and binaryLookup table
  // to achieve O(n) string conversion without nested bitwise loops or O(n^2) string concatenation.
  const len = arreglo.length;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    result[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  const resultado = result.join(' ');

  // Use textContent instead of innerHTML for better performance and security
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
