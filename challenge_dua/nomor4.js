function isValidPassword(email){
    // kode logic valid pasword
    let regexPassword = "^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])";

    if(typeof email == "string"){
        return(email.match(regexPassword) ? "true":"false")
    }
}

// ketika function dipanggil
console.log(isValidPassword("Meong2022"))
console.log(isValidPassword("meong2022"))