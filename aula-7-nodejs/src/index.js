const Carro = require("./models/Carro")
const CarroRepository = require("./repositories/CarroRepository")

function main(){
    let repository = new CarroRepository();
    let carro = new Carro("City","Honda", "2022","Azul")

    repository.salvarCarro(carro)

    let carro2 = new Carro("Civic","Honda", "2022","Azul")

    repository.salvarCarro(carro2)

    console.log(repository.listarCarros())    
}


main()

