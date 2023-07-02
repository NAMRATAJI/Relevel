function largestNum(a, b, c){
    if(a>b && a>c){
        console.log(a+ "is largest");
    }
    else if(b>a && b>c) {
        console.log(b+ " is largest");
    }
    else{
        console.log(c+ " is largest")
    }

}
largestNum(100, 120, 80);
largestNum(30, 20, 10);
largestNum(120, 130, 150)
