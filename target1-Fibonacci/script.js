const verificar = () => {
  let docNumero = document.getElementById("numero");
  numero = Number(docNumero.value);
  if (Number.isInteger(numero) && numero > 0) {
    arr = gerarFibonacci(numero);
    if (arr.includes(numero)) {
      let texto = document.getElementById("texto");
      texto.innerHTML = "O número pertence a sequencia";
    }
    else {
      let texto = document.getElementById("texto");
      texto.innerHTML = "O número não pertence a sequencia";
    }
  }
  else{
    let texto = document.getElementById("texto");
    texto.innerHTML = "Digite um número válido";
  }

}

const gerarFibonacci = (numero) => {
  let element1 = 0;
  let element2 = 1;
  let arr = [];
  arr.push(0);

  while (element2 <= numero) {
    let temp = element2;
    element2 += element1;
    element1 = temp;
    arr.push(element1);
  }
  console.log(arr);
  return(arr);
}