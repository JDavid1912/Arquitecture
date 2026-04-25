// Precomputed binary lookup table for 8-bit characters (0-255)
// Bolt ⚡: Using a lookup table avoids bitwise calculations in the hot path.
const BINARY_LOOKUP = new Array(256);
for (let i = 0; i < 256; i++) {
  BINARY_LOOKUP[i] = i.toString(2).padStart(8, '0');
}

/**
 * Optimización Bolt ⚡:
 * 1. Uso de tabla de búsqueda (lookup table) para evitar cálculos de bits en cada iteración.
 * 2. Uso de Array y join(' ') en lugar de concatenación de strings en bucle (evita O(n^2)).
 * 3. Uso de textContent en lugar de innerHTML para mejor rendimiento y seguridad.
 * 4. Pre-asignación del tamaño del array para evitar re-dimensionamiento dinámico.
 */
function mostrarBinario(){
  const input = document.getElementById("binario").value;
  const len = input.length;
  const resultado = new Array(len);

  for (let i = 0; i < len; i++) {
    // Aseguramos que el charCode esté en el rango 0-255 para la tabla de búsqueda
    // El código original procesaba 8 bits, por lo que mantenemos esa lógica.
    const charCode = input.charCodeAt(i) & 0xFF;
    resultado[i] = BINARY_LOOKUP[charCode];
  }

  const finalString = resultado.join(' ');
  document.getElementById("bin").textContent = "El número binario es " + finalString;
  console.log(finalString);
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
