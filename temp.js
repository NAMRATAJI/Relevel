function canDoToPark(temp, isRaining){
if((temp>=20 && temp<=25) && !isRaining){
    console.log("yes! you can go out the play");
}
else if((temp>=18 && temp<=20)&& isRaining==false){
    console.log("stay inside the play school");
}
else{
    console.log("Go home and stay there");
}
}
canDoToPark(22, false);
canDoToPark(19, true);