{
    // type alias 
    type TNickName = "Mushkil Asan" | "Ural ponkhi";
    const bondhu : TNickName = "Ural ponkhi"

    type A = {bondhu: "Upokari"};
    type B = {sotru: number}

    type AB = A & B 

    const robot : AB = {
        bondhu: "Upokari",
        sotru: 2,
    }

    //ternary operator
    let age
    age = 18;
    if(true) {
        console.log("adult")
    }
    else{
        console.log("shisu")
    }

    const  status = age >= 18 ? "adult" : "shisu"
    console.log(status)
    
    // if(typeof age == "number"){
    //    type voter = number
    // }

    const voterType = typeof age == "number" ? ""

}