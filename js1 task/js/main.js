for(let i = 4; i < 200; i++){

  let check = false;
  for(let j = 2; j < i; j++){
    if(i % j == 0){
      check = true;
      break;
    }
  }
  if(!check){
    console.log(i);
  }
}