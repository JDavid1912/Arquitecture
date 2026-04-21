const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  let len = arreglo.length;
  let resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Precomputed lookup table for 8-bit binary strings
    resultado[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
  }

  let finalString = resultado.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + finalString;
  console.log(finalString);
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
