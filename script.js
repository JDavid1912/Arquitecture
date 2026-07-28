// Precomputed global lookup table for O(1) 8-bit binary conversions.
// This avoids inner loops and string concatenation overhead.
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
  if (!inputVal) {
    document.getElementById("bin").textContent = "El número binario es";
    return;
  }

  const len = inputVal.length;
  // Pre-allocating the array and using a standard loop is more efficient
  // than Array.from() or spread operators.
  const resultArr = new Array(len);

  for (let i = 0; i < len; i++) {
    // Truncate non-ASCII / surrogate pair char codes to 8-bit to maintain exact original logic behaviour (charCode & 0xFF)
    const charCode = inputVal.charCodeAt(i) & 0xFF;
    resultArr[i] = binaryLookup[charCode];
  }

  // Update DOM using textContent for safety and performance, avoiding innerHTML parsing.
  document.getElementById("bin").textContent = "El número binario es " + resultArr.join(' ');
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
