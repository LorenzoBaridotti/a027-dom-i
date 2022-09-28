const frutas = ["laranja", "limão", "uva"];

for (let i = 0; i < frutas.length; i++) {
  const addFrutas = document.getElementById(`fruta${i + 1}`);
  addFrutas.innerHTML += frutas[i];
}

const valorFruta = document.getElementById("fruta");

const imprimirFruta = () => {
  console.log(valorFruta.value);
};

const addFruta = () => {
  fruta4.innerHTML = valorFruta.value;
  valorFruta.value = "";
};
