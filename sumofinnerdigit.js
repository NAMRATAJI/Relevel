function getSumOfInnerDigits(num){  // 123456
    var numStr = num.toString() // converting num to string

    //1. check inner digits are present.
    if(numStr.lengh<3){
        return -1;
    }

    // 2. Run Loop.
    let sum=0;
    for(let i=1; 1<=numStr.length-2; i++){
        sum+=Number(numStr[i]);

    }
    console.log(-1);
}
getSumOfInnerDigits(123456);
getSumOfInnerDigits(12);

