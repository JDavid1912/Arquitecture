// Precompute lookup table for 8-bit binary strings to speed up conversion
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario() {
  const input = document.getElementById("binario").value;
  const len = input.length;

  if (len === 0) {
    document.getElementById("bin").textContent = "El número binario es ";
    return;
  }

  // Using an array and join is much faster than string concatenation in a loop
  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    // Mask with 0xFF to ensure we only look up 8-bit values, matching original behavior
    result[i] = binaryLookup[input.charCodeAt(i) & 0xFF];
  }

  const finalResult = result.join(' ');
  // textContent is faster and more secure than innerHTML
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  const binario = document.getElementById("binario1").value;
  const len = binario.length;
  const result = [];

  for (let i = 0; i < len; i += 8) {
    const byte = binario.slice(i, i + 8);
    // Use parseInt for native binary to decimal conversion
    result.push(String.fromCharCode(parseInt(byte, 2)));
  }

  const finalResult = result.join('');
  document.getElementById("bin1").textContent = "El carácter es " + finalResult;
  console.log(finalResult);
}

function mostrarCaracter() {
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
