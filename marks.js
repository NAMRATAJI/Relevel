function printMarks(marks){
    if(marks>=90 && marks<=100){
        console.log("A grade");
    }else if(marks>=80 && marks<=89){
        console.log("B grade");
    }else if(marks>=60 && marks<=79){
        console.log("C grade");
    }else if(marks>=33 && marks<=59){
        console.log("D grade");
    }else{
        console.log("fail");
    }
}
printMarks(78);
printMarks(97);
printMarks(32);
printMarks(62);
printMarks(56);
