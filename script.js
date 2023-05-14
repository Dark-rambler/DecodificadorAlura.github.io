var texto = document.getElementById("entrada");
var encriptar = document.getElementById("azulButton");
var desencriptar = document.getElementById("blancoButton");
var resultado = document.getElementById("output");
var copiar=document.getElementById("copiar");

encriptar.addEventListener("click", () => {
  let encriptado = "";

  for (let i = 0; i < texto.value.length; i++) {
    if (texto.value.charAt(i) == "e") {
      encriptado = encriptado + "enter";
    } else {
      if (texto.value.charAt(i) == "i") {
        encriptado = encriptado + "imes";
      } else {
        if (texto.value.charAt(i) == "a") {
          encriptado = encriptado + "ai";
        } else {
          if (texto.value.charAt(i) == "o") {
            encriptado = encriptado + "ober";
          } else {
            if (texto.value.charAt(i) == "u") {
              encriptado = encriptado + "ufat";
            } else {
              encriptado = encriptado + texto.value.charAt(i);
            }
          }
        }
      }
    }
  }
  console.log(encriptado);
  resultado.innerHTML = encriptado;
  copiar.classList.remove("invisible");
  copiar.classList.add("boton");
  copiar.classList.add("centrar");
});

function desencriptador(oracion, palabra, letra) {
  let pos = oracion.indexOf(palabra);
  console.log(pos);
  while (pos >= 0) {
    oracion =
      oracion.slice(0, pos) + letra + oracion.slice(pos + palabra.length);
    pos = oracion.indexOf(palabra);
  }

  return oracion;
}

desencriptar.addEventListener("click", () => {
  var palabras = ["ober", "ai", "ufat", "enter", "imes"];
  var codigos = ["o", "a", "u", "e", "i"];
  var res = texto.value;
  for (let i = 0; i <= palabras.length; i++) {
    res = desencriptador(res, palabras[i], codigos[i]);
  }
  resultado.innerHTML = res;
});
copiar.addEventListener("click", ()=>{
    navigator.clipboard.writeText(resultado.textContent);
})
