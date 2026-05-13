const BINARY_LOOKUP = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  const resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Mask with 0xFF to ensure we only handle 8-bit characters, matching the original logic
    const charCode = input.charCodeAt(i) & 0xFF;
    resultado[i] = BINARY_LOOKUP[charCode];
  }

  const finalString = resultado.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + finalString;
  console.log(finalString);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  const results = [];

  for (let i = 0; i < len; i += 8) {
    const byte = binario.substring(i, i + 8);
    if (byte.length === 0) continue;

    // Using parseInt(byte, 2) is more efficient than manual bitwise loop
    const charCode = parseInt(byte, 2);
    results.push(String.fromCharCode(charCode));
  }

  const finalString = results.join('');
  document.getElementById("bin1").textContent = "El carácter es " + finalString;
  console.log(finalString);
}

function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
