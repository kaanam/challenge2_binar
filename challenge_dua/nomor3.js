function checkEmail(email){
    // kode logic validasi email
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(typeof email == "string"){
        return(email.match(regexEmail) ? "Valid":"Invalid")
    }else if(email == null){
        return "Error : Cek ulang parameternya?"
    } else{
        return "Error : Ada parameternya tapi tidak Valid gaes"
    }

}

// ketika function dipanggil
console.log(checkEmail("anam@binar.co.id"))
console.log(checkEmail("anam@binar"))
console.log(checkEmail("anam"))
console.log(checkEmail({}))
console.log(checkEmail())
