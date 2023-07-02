//power of number
function getPower(num, pow){
    let i=1;
    while (i<pow){
        num=num*num;
        i++;
    }
    console.log(num)

}
getPower(10,2);
getPower(5,2);