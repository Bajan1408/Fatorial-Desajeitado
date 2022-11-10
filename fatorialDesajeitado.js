let n = 10;

let tmp = n;
let tmp2 = tmp - 1;
let tmp3 = tmp - 2;
let result = 0;


if(n <= 2){
    console.log(n)
} else {
    while(tmp > 0){
        if(tmp >= 3){
          result = tmp * tmp2 / tmp3;
          }
          tmp -= 3;
    while(tmp >= 7){
          tmp -= 4;
          }
        if(tmp == 6){
          result = result + tmp - 5 * 4 / 3;
          tmp -= 4;
          result = result + 2 - 1;
          tmp = 0;
          }
        if(tmp == 5){
          result = result + tmp - 4 * 3 / 2;
          tmp -= 4;
          result = result + 1;
          tmp = 0;
          }
        if(tmp == 4){
          result = result + 4 - 3 * 2 / 1;
          tmp -= 4;
          }  
        if(tmp == 3){
          result = result + 3 - 2 * 1;
          tmp -= 3;
          }
        if(tmp == 2){
          result = result + 2 - 1;
          tmp -= 2;
          }
        if(tmp == 1){
          result = result + 1;
          tmp -= 1;
          }
       }
     
       console.log(Math.floor(result));

      }

let varTeste = 'Um texto aqui';

console.log(varTeste);


console.log('Esta linha foi incluida no repositório local após uma alteração no remoto, e antes de mergear');


console.log('Agora o conflito foi resolvido e subido o código de novo pro gitHub');


    
