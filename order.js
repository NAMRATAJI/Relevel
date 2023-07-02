function order(a, b, c){
    if(a>b && b>c){
        console.log("Decreasing order");
    }
    else if(a<b && b<c){
        console.log("increasing order");
    }
    else{
        console.log("neither increasing or decreasing");
    }
}
order(12, 45, 27);
order(30, 6, 7);
order(6, 7, 8);
order(90, 80, 70)