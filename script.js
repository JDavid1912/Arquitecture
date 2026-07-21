// Global lookup table precomputing 8-bit binary string representations for indices 0 to 255.
// This allows O(1) retrieval of binary values, eliminating redundant bitwise operations.
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  binaryLookup[i] = bin;
}

function mostrarBinario(){
  const arreglo = document.getElementById("binario").value;

  if (!arreglo) {
    document.getElementById("bin").textContent = "El número binario es";
    console.log('');
    return;
  }

  const len = arreglo.length;
  // Pre-allocating the array avoids dynamic scaling overhead and is significantly faster for long inputs.
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    const charCode = arreglo.charCodeAt(i);
    // Bitmask with 0xFF ensures that char codes > 255 are truncated to 8 bits,
    // maintaining absolute equivalence with the original nested bitwise loop behavior.
    resultArr[i] = binaryLookup[charCode & 0xFF];
  }

  const resultado = resultArr.join(' ');

  // Using textContent instead of innerHTML avoids HTML parsing costs and is more secure.
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
