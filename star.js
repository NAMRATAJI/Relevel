function star(n){
    let string="";
    for(i=1; i<=n; i++){
        for(j=0; j<=n-i; j++){
            string += " ";
        }
        for(k=0; k<2*i-1; k++){
            string +="*";
        }
        string += "\n";
    }
    console.log(string);

}
star(5);