const lookupTable = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    // Optimization: Use precomputed lookup table and bitmask to ensure 0-255 range
    result[i] = lookupTable[input.charCodeAt(i) & 0xFF];
  }

  const resultado = result.join(' ');
  // Optimization: Use textContent instead of innerHTML for performance and security
  document.getElementById("bin").textContent = "El número binario es " + resultado;
  console.log(resultado);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const result = [];

  for (let i = 0; i < binario.length; i += 8) {
    const byte = binario.substring(i, i + 8);
    // Optimization: Use parseInt(byte, 2) instead of manual bit-parsing loop
    result.push(String.fromCharCode(parseInt(byte, 2)));
  }

  const caracteres = result.join('');
  // Optimization: Use textContent instead of innerHTML
  document.getElementById("bin1").textContent = "El carácter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  // Optimization: Use textContent instead of innerHTML
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
