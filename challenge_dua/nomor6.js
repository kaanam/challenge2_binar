function getAngkaTerbesarKedua(dataNumbers){
    // kode logic dataNumber
   if (Array.isArray(dataNumbers) && dataNumbers.length >=2){
        let numbers = new Set(dataNumbers.sort((a,b)=>{return a-b}).reverse())
        return Array.from(numbers)[1]
   }
   return "Error"
  
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8]

// jika function dipanggil
console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())

 