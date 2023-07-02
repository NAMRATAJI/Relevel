function checkNum(num){
    if(num>0){
        console.log("positive number");
    }
    else if(num<0){
        console.log("negative number");
    }
    else if(num==0){
        console.log("number is zero");
    }
    else{
        console.log("invalid number");
    }
}
checkNum(67);
checkNum(-89);
checkNum(0);
checkNum("qwe");