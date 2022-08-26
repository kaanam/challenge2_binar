function changeWord(selectedText, changedText, text){
    // kode logic change text
    return text.replace(selectedText, changedText)
}

// variabel kalimat 1 and 2
const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak akan mampu mengambarkan besarnya cintaku padamu'

// ketika fuction dipanggil dengan variabel kalimat 1 and kalimat 2
console.log(changeWord('mencintai','membenci',kalimat1))
console.log(changeWord('bromo','selamet',kalimat2))