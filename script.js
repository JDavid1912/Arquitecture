// Pre-allocated binary lookup table for 8-bit values (0-255)
// This avoids costly bitwise operations and repetitive string allocations on each keypress/conversion.
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  BINARY_LOOKUP[i] = bin;
}

function mostrarBinario() {
  const arreglo = document.getElementById("binario").value;
  const len = arreglo.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es";
    console.log("");
    return;
  }

  // Optimize performance on large inputs by pre-allocating the array
  // and joining once, replacing the O(N^2) string concatenation loop.
  const binaryArray = new Array(len);
  for (let i = 0; i < len; i++) {
    // Truncating to 8-bit via & 0xFF perfectly preserves the original behavior
    // and maps safely into our global lookup table.
    binaryArray[i] = BINARY_LOOKUP[arreglo.charCodeAt(i) & 0xFF];
  }

  const resultado = binaryArray.join(' ');
  // Use textContent instead of innerHTML to prevent unnecessary HTML parsing and improve security.
  document.getElementById("bin").textContent = "El número binario es " + resultado;
  console.log(resultado);
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
