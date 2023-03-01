const calcular = () => {
  let docLucros = document.getElementById("lucros");
  let txtLucros = docLucros.innerHTML;
  let arrTxt = txtLucros.split("<br>");
  
  txtLucros = arrTxt.join("");
  arrTxt = txtLucros.split(" – R$");

  txtLucros = arrTxt.join(" ");
  arrTxt = txtLucros.split(" ");

  let total = 0;

  converter(arrTxt);
  for(let i = 1; i < arrTxt.length; i += 2){
    total += arrTxt[i]
  }

  let docTexto = document.getElementById("texto");
  //texto = docTexto.innerHTML;
  let provaREAL=Number(0);
  
  for(let i = 0; i < arrTxt.length; i += 2){
    docTexto.innerHTML += `O valor percentual de representação de ${arrTxt[i]} é de ${(arrTxt[i+1]*100/total).toFixed(2)}% <br>`;
    provaREAL += Number((arrTxt[i+1]*100/total).toFixed(2));
    console.log(provaREAL);
    
  }
  
  //console.log(txtLucros);
  console.log(arrTxt);
}

const converter = (arrTxt) =>{
  for(let i = 1; i < arrTxt.length; i += 2){
    let arrTemp1 = arrTxt[i].split(".");
    let num = Number(0);
    for(let j = 0; j < arrTemp1.length; j++){

      if(j != arrTemp1.length -1){
        let temp1 = Number(arrTemp1[j]);
        num += Number(temp1 * (10**((arrTemp1.length - 1 - j )* 3)));
      }
      else{
        let arrTemp2 = arrTemp1[j].split(",");
        num += Number(Number(arrTemp2[0]) + Number(arrTemp2[1]/100))
      }
    }
    arrTxt[i] = num;
  }
};