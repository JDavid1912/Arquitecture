function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  let resultado = [];

  // Optimization: use toString(2) and padStart for faster binary conversion
  // and use an array with join(' ') to avoid repeated string concatenation.
  for (let i = 0; i < arreglo.length; i++) {
    // Truncate to 8 bits to match original behavior and pad with leading zeros
    resultado.push((arreglo.charCodeAt(i) & 0xFF).toString(2).padStart(8, '0'));
  }

  const finalResult = resultado.join(' ');
  document.getElementById("bin").innerHTML = "El número binario es " + finalResult;
  console.log(finalResult);
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
