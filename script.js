// Pre-computed lookup table for 8-bit binary strings (0-255)
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  if (!input) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Optimization: Pre-allocating the array and using a lookup table for faster conversion
  const result = new Array(input.length);

  for (let i = 0; i < input.length; i++) {
    // Bitmasking to 0xFF ensures we stay within the lookup table bounds (8-bit)
    result[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  const finalString = result.join(' ');
  // Optimization: Using textContent is faster than innerHTML and avoids unnecessary HTML parsing
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
