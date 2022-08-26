function checkTypeNumber(givenNumber){
    // kode logic validi number
   if(typeof givenNumber == "number"){
    return(givenNumber % 2 === 0 ? "genap":"ganjil")
   }else if(givenNumber == null){
    return "Error: mana nich parameternya?"
   }else {
    return "Error: ada parameternya tapi parameternya tidak valid "
   }
}

// Expexted Result ketika Function dipanggil
console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber())
