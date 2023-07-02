function grade(marks){
    switch(marks) {
        case "A+":{
            console.log("Distinction");
            break;
        }
        case "A":{
            console.log("1st");
            break;
        }
        default : {
            console.log("invalid value")
        }
    }
}
grade("A+");