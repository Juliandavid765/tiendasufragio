//OBJETOS
let producto1={
    nombre:"8 GB de ram",
    precio:450000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-5e7b0.appspot.com/o/8%20GB%20de%20ram.webp?alt=media&token=8c2c7f0f-ff9a-42b6-827a-063e3f28e787"
}

let producto2={
    nombre:"audifonos",
    precio:160000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-5e7b0.appspot.com/o/audifonos.webp?alt=media&token=00d89590-4d33-41ef-bf22-ecfc5904e3a6"
}

let producto3={
    nombre:"bicicleta",
    precio:600000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-5e7b0.appspot.com/o/bicicleta.webp?alt=media&token=ed01f347-30d0-4e31-8e35-9602f522e94c"
}

let producto4={
    nombre:"casco para bicicleta",
    precio:50000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-5e7b0.appspot.com/o/casco%20para%20bicicleta.webp?alt=media&token=30479b36-3bfc-41bf-ab73-7a3359f5e7ee"
}

let producto5={
    nombre:"gafas",
    precio:10000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-5e7b0.appspot.com/o/gafas.webp?alt=media&token=cecc846f-8d30-49f6-857a-a069c1b52057"
}

let producto6={
    nombre:"peluche gnar league of legends",
    precio: 75000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-5e7b0.appspot.com/o/gnar%20peluche.webp?alt=media&token=262ce087-97d2-44e8-b864-8a5a2d2cdc17"
}

let producto7={
    nombre:"lavadora",
    precio:1000000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-5e7b0.appspot.com/o/lavadora.webp?alt=media&token=f90bb37c-3cda-4359-ba68-c14d15476332"
}

let producto8={
    nombre:"limpiador facial",
    precio:22000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-5e7b0.appspot.com/o/limpiador%20facial.webp?alt=media&token=0ffa7f98-fe3c-49a0-b433-e38cfb6d7322"
}

let producto9={
    nombre:"oso de peluche",
    precio:76000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-5e7b0.appspot.com/o/oso%20de%20peluche.webp?alt=media&token=4aaabdc9-0f97-4049-9769-bf771ef3e378"
}

let producto10={
    nombre:"parrilla asador de acero y aluminio portable camping",
    precio:70000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-5e7b0.appspot.com/o/parrilla%20asador%20de%20acero%20y%20aluminio%20portable%20camping.webp?alt=media&token=8a58fd1b-43eb-4278-8354-963f3ab6e411"
}

let producto11={
    nombre:"pc gamer",
    precio:600000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-5e7b0.appspot.com/o/pc%20gamer.webp?alt=media&token=47a668ef-9d2b-430a-8070-f95cb2dcd6e8"
}

let producto12={
    nombre:"pesa",
    precio:80000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-5e7b0.appspot.com/o/pesa.webp?alt=media&token=299188a6-b0d8-4a46-bb54-4102d0d45e12"
}

let producto13={
    nombre:"maleta de viaje",
    precio:60000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-5e7b0.appspot.com/o/maleta%20de%20viaje.webp?alt=media&token=6dfd77ab-db30-4310-b61d-18a2f5a26139"
}

let producto14={
    nombre:"microhondas",
    precio:120000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-5e7b0.appspot.com/o/microhondas.webp?alt=media&token=8f6d379c-8bba-45ed-befd-5b2a3aed63a2"
}

let producto15={
    nombre:"mochila",
    precio:21000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-5e7b0.appspot.com/o/mochila.webp?alt=media&token=8f242c3f-1935-4a0d-828b-ad797a83e3ec"
}

let producto16={
    nombre:"producto16",
    precio:500000,
    estado:true,
    foto:""
}

let producto17={
    nombre:"producto17",
    precio:500000,
    estado:true,
    foto:""
}

let producto18={
    nombre:"producto18",
    precio:500000,
    estado:true,
    foto:""
}

let producto19={
    nombre:"producto19",
    precio:500000,
    estado:true,
    foto:""
}

let producto20={
    nombre:"producto20",
    precio:500000,
    estado:true,
    foto:""
}

//ARREGLO
let productos=Array(
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
    producto11,
    producto12,
    producto13,
    producto14,
    producto15,
    producto16,
    producto17,
    producto18,
    producto19,
    producto20
)
let contenedor=document.getElementById("contenedor")

//RECORRO EL ARREGLO
productos.forEach(function(producto){
    let foto=document.createElement("img")
    foto.classList.add("w-100" , "img-fluid")
    foto.src=producto.foto
    let columna=document.createElement("div")
    columna.classList.add("col")
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    contenedor.appendChild(columna)







})

