// Precompute binary lookup table for 8-bit characters (0-255)
// This avoids bitwise operations and string concatenation in the hot path.
const binaryLookup = Array.from({ length: 256 }, (_, i) => i.toString(2).padStart(8, '0'));

function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;

  // Use an array to store binary strings and join them at the end.
  // This is significantly faster than repeated string concatenation (O(n^2)).
  const resultadoArray = new Array(len);

  for (let i = 0; i < len; i++) {
    // Bitmasking with 0xFF ensures we stay within the 0-255 range for the lookup table.
    const charCode = input.charCodeAt(i) & 0xFF;
    resultadoArray[i] = binaryLookup[charCode];
  }

  const finalResult = resultadoArray.join(' ');

  // Using textContent is more performant and secure than innerHTML.
  document.getElementById("bin").textContent = "El número binario es " + finalResult;
  console.log(finalResult);
}

function mostrarBinario1() {
  const element = document.getElementById("binario1");
  if (!element) return; // Guard against missing element in HTML

  const binario = element.value;
  const len = binario.length;
  // Use ceil to handle any trailing bits (regression safety)
  const resultLen = Math.ceil(len / 8);
  const caracteresArray = new Array(resultLen);

  for (let i = 0; i < resultLen; i++) {
    // Replacing deprecated substr with slice
    const byte = binario.slice(i * 8, i * 8 + 8);
    // Native parseInt(byte, 2) is highly optimized in modern JS engines.
    // It also correctly handles partial bytes at the end of the string.
    const charCode = parseInt(byte, 2);
    if (!isNaN(charCode)) {
      caracteresArray[i] = String.fromCharCode(charCode);
    } else {
      caracteresArray[i] = '';
    }
  }

  const finalString = caracteresArray.join('');
  document.getElementById("bin1").textContent = "El carácter es " + finalString;
  console.log(finalString);
}

function mostrarCaracter(){  
  const binario = document.getElementById("caracter").value;
  const decimal = parseInt(binario, 2);
  const caracter = String.fromCharCode(decimal);
  // Consistent use of textContent for DOM updates.
  document.getElementById("bin1").textContent = "El carácter es " + caracter;
}
