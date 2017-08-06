var num=Number(prompt("digite numero"));
var x = 0,i;
for (i = 1; i <= num; i++) {
        if(num % i === 0){
      x++;
  }
  }

if (x<= 2){
    console.log("este numero es primo " + num);
} else {
    console.log("este numero no es un numero primo " + num);
}

//esta es la evaluacion de el caso:
//capturar un numero entero y mostrar en consola si es primo o no.