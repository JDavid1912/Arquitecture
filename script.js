// Global pre-computed 8-bit binary lookup table for fast text-to-binary conversions
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  binaryLookup[i] = bin;
}

function mostrarBinario(){
  const inputVal = document.getElementById("binario").value;
  const len = inputVal.length;

  // Return early if the input is empty to match original behavior and avoid returning 'El número binario es' without spaces
  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    console.log("");
    return;
  }

  // Pre-allocate array for faster performance and join elements in a single step
  const resultArr = new Array(len);
  for (let i = 0; i < len; i++) {
    // Truncate non-ASCII codes to 8-bit range to preserve original truncation logic
    const charCode = inputVal.charCodeAt(i) & 0xFF;
    resultArr[i] = binaryLookup[charCode];
  }

  const trimmedResultado = resultArr.join(' ');

  // Use textContent instead of innerHTML to prevent unnecessary HTML parsing
  document.getElementById("bin").textContent = "El número binario es " + trimmedResultado;
  console.log(trimmedResultado);
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
