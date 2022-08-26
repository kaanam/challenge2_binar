function getSplitName(personName){
    if (typeof personName !="string"){
        return " Error"
    }
    //
    let name = personName.split(" ")
    const properties ={
      firstName : null,
      middleName : null,
      lastName: null,
    }
    if (name.length === 3){
        properties.firstName = name [0];
        properties.middleName = name [1];
        properties.lastName = name [2];
        return properties
     } 
      if (name.length === 2){
        properties.firstName = name [0]
        properties.middleName = name [1]
        return properties
        }
      if (name.length === 1){
        properties.firstName = name [0]
        return properties
      }else{
        return "Error: this function is only for tree caracters name"
      }
}


//jika function dipanggil
console.log(getSplitName(0))
console.log(getSplitName("Muhammad Khaerul Anam"))
console.log(getSplitName("Coba Muhammad Khaerul Anam"))
console.log(getSplitName("Coba Muhammad"))
console.log(getSplitName("Coba"))