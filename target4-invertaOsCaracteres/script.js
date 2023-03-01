const inverter = () => {
  let docCaracteres = document.getElementById("caracteres");
  let caracteres = docCaracteres.value;
  let arr = [];

  
  if(caracteres){
    arr = caracteres.split("");
    console.log(arr);
    for(let i = 0; i < arr.length/2; i++){
      let temp = arr[i]
      arr[i] = arr[(arr.length) - i - 1];
      arr[(arr.length) - i - 1] = temp;
    }
  }
  console.log(arr.join(""));
  let texto = document.getElementById("texto");
  texto.innerHTML = arr.join("");
};