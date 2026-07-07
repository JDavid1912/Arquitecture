// Pre-calculate a lookup table for 8-bit binary strings (0-255)
// This avoids repeated bitwise operations during conversion
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;

  // Early return for empty input to match original behavior
  if (!input) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  const length = input.length;
  // Pre-allocating array for better performance when processing large strings
  const results = new Array(length);

  for (let i = 0; i < length; i++) {
    // Mask with 0xFF to ensure we handle characters as 8-bit,
    // retrieving from pre-calculated lookup table (O(1))
    results[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  const resultString = results.join(' ');
  // Use textContent instead of innerHTML for faster DOM updates and better security
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
