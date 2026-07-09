// Pre-calculated lookup table for 8-bit binary strings (0-255)
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  if (input.length === 0) return;

  // Bolt optimization: Use pre-allocated array and join(' ') for O(n) performance
  // and lookup table for O(1) binary conversion per character.
  const len = input.length;
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // We use & 0xFF to ensure we stay within the 0-255 range of our lookup table
    resultArr[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  const resultado = resultArr.join(' ');

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
