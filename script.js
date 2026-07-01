// Precomputed lookup table for 8-bit binary representations
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  binaryLookup[i] = i.toString(2).padStart(8, '0');
}

function mostrarBinario(){
  let arreglo = document.getElementById("binario").value;
  if (!arreglo) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  let len = arreglo.length;
  let result = new Array(len);

  for (let i = 0; i < len; i++) {
    // Process character code as 8-bit to match original behavior
    result[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  const finalString = result.join(' ');
  // Use textContent for performance and security
  document.getElementById("bin").textContent = "El número binario es " + finalString;
  console.log(finalString);
}

function mostrarBinario1() {
  let binarioInput = document.getElementById("binario1");
  if (!binarioInput) return;

  let binario = binarioInput.value;
  let len = binario.length;
  if (len === 0) return;

  let numBytes = Math.ceil(len / 8);
  let result = new Array(numBytes);

  for (let i = 0; i < numBytes; i++) {
    let byte = binario.slice(i * 8, (i + 1) * 8);
    result[i] = String.fromCharCode(parseInt(byte, 2));
  }

  const finalString = result.join('');
  document.getElementById("bin1").textContent = "El carácter es " + finalString;
  console.log(finalString);
}

function mostrarCaracter(){  
  let binario = document.getElementById("caracter").value;
  // parseInt with base 2 is efficient for binary conversion
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
