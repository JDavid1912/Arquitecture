// Precomputed lookup table for byte to binary string conversion (0-255)
const BYTE_TO_BIN = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  const resultado = new Array(len);

  // Use precomputed table and Array.join for better performance than string concatenation in a loop
  for (let i = 0; i < len; i++) {
    resultado[i] = BYTE_TO_BIN[input.charCodeAt(i) & 0xFF];
  }

  const resultString = resultado.join(' ');
  // textContent is faster and safer than innerHTML for plain text
  document.getElementById("bin").textContent = "El número binario es " + resultString;
  console.log(resultString);
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
