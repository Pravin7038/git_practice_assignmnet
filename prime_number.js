 let num=4;
let count=0;
for(let i=1;i<num;i++){

  if(num%i==0){

    count++;
  }
}if(count==4){

  console.log(num,"is prime");
}else{

   console.log(num,"is not prime")
}