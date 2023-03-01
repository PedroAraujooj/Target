const listarValores = async () => {
  let arr = [];

  fetch("dados.json").then(response => response.json()).then(listaDeValores => {
    listaDeValores.forEach(item => {
      //console.log(item.valor);
      arr.push(Number(item.valor));
    });

    //console.log(arr);
    let sum = Number(0);
    let count = parseInt(0);
    let menor = arr[0];
    let maior = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
        count++;
        //console.log(arr[i]);
        if (arr[i] > maior) maior = arr[i];
        if (arr[i] < menor) menor = arr[i];
      }
    }

    let media = sum / count;
    let numerosDeDiasMaioresQueMedia = parseInt(0);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > media) numerosDeDiasMaioresQueMedia++;
    }

    console.log("O menor valor de faturamento ocorrido em um dia do mês foi " + menor);
    console.log("O maior valor de faturamento ocorrido em um dia do mês foi " + maior);
    console.log("O número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi " + numerosDeDiasMaioresQueMedia);

    texto = document.getElementById("texto");

    texto.innerHTML += "O menor valor de faturamento ocorrido em um dia do mês foi " + menor + "<br>";
    texto.innerHTML += "O maior valor de faturamento ocorrido em um dia do mês foi " + maior + "<br>";
    texto.innerHTML += "O número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi " + numerosDeDiasMaioresQueMedia + "<br>";

  });
};
listarValores();