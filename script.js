// Lookup table pre-calculated globally for high performance O(1) character-to-binary retrieval (characters 0 to 255)
const binaryLookup = new Array(256);
for (let i = 0; i < 256; i++) {
  let bin = '';
  for (let j = 7; j >= 0; j--) {
    bin += (i & (1 << j)) ? '1' : '0';
  }
  binaryLookup[i] = bin;
}

function mostrarBinario() {
  const arreglo = document.getElementById("binario").value;
  const len = arreglo.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es";
    return;
  }

  // Pre-allocating standard array is significantly faster than dynamic resizing or push()
  const resultado = new Array(len);
  for (let i = 0; i < len; i++) {
    // Truncate to 8-bit ASCII value domain (0-255) to match original behavior
    resultado[i] = binaryLookup[arreglo.charCodeAt(i) & 0xFF];
  }

  // Join once to avoid O(N^2) string concatenation issues and update DOM using safe textContent
  const outputText = "El número binario es " + resultado.join(' ');
  document.getElementById("bin").textContent = outputText;
  console.log(resultado.join(' '));
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  let caracteres = '';

  // Optimized chunk parsing from binary string
  for (let i = 0; i < len; i += 8) {
    const byte = binario.slice(i, i + 8);
    const charCode = parseInt(byte, 2);
    if (!isNaN(charCode)) {
      caracteres += String.fromCharCode(charCode);
    }
  }

  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter() {
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
