// Precomputed lookup table for 8-bit binary strings (0-255)
const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  const results = new Array(len);

  for (let i = 0; i < len; i++) {
    // Use & 0xFF to ensure 8-bit lookup, matching original behavior
    results[i] = BINARY_LOOKUP[input.charCodeAt(i) & 0xFF];
  }

  const combined = results.join(' ');
  // Use textContent instead of innerHTML for performance and security
  document.getElementById("bin").textContent = "El número binario es " + combined;
  console.log(combined);
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
