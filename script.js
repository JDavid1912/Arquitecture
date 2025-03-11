function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  let resultado = '';

  for (let i = 0; i < arreglo.length; i++) {
    let charCode = arreglo.charCodeAt(i);
    let binario = '';

    for (let j = 7; j >= 0; j--) {
      binario += (charCode & (1 << j)) ? '1' : '0';
    }

    resultado += binario + ' ';
  }

  document.getElementById("bin").innerHTML = "El número binario es " + resultado.trim();
  console.log(resultado.trim());
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
