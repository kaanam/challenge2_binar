const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
];


function getInfoPenjualan(dataPenjualan){
  let untung = 0;
    let modal=0;
    let persentaseKeuntungan=0;
    let temp =0 ;
    let result = null; //mendefinikan result nilainya null
    for(let i = 0; i < dataPenjualan.length; i++) {
      //mengecek harga beli , harga jual, dan total terjual itu number atau bukan
      if(typeof dataPenjualan[i].hargaBeli === "number" || typeof dataPenjualan[i].hargajual === "number"|| typeof dataPenjualan[i].totalTerjual === "number" || typeof dataPenjualan[i].sisaStok === "number"){
        //melakukan perhitungan untung dengan rumus harga jual -harga beli dikali total terjual
        untung += (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli) * dataPenjualan[i].totalTerjual  
      } 
      //mengecek harga beli , harga jual, dan total terjual itu number atau bukan
      if(typeof dataPenjualan[i].hargaBeli === "number" || typeof dataPenjualan[i].hargajual === "number" || typeof dataPenjualan[i].totalTerjual === "number" || typeof dataPenjualan[i].sisaStok === "number" ){
        //melakukan perhitungan modal dengan rumus dari total terjual + sisa stok  dikali harga beli
        modal += ( dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok ) * dataPenjualan[i].hargaBeli 
      }

      persentaseKeuntungan = Math.round((untung/modal) * 100) //menghitung persentase keuntungan

      if(temp <  dataPenjualan[i].totalTerjual ){ //kondisi untuk melihat yang paling banyak terjual dari data total terjual
        temp = dataPenjualan[i].totalTerjual
        result = dataPenjualan[i] //menyimpan object ke variabel result
        
      }
        
    }
    return {
      totalKeuntungan: "Rp." + untung.toLocaleString(), //fungsi tolocalestring untuk mengubah kerupiah
      totalModal: "Rp." + modal.toLocaleString(), //fungsi tolocalestring untuk mengubah kerupiah
      persentaseKeuntungan : persentaseKeuntungan.toString() + "%", //fungsi mengubah number ke string dan menambahkan persen
      produkBukuTerlaris : result.namaProduk, //memangil field dari object
      penulisTerlaris : result.penulis,//memangil field dari object
    }   
    
}

console.log(getInfoPenjualan(dataPenjualanNovel));