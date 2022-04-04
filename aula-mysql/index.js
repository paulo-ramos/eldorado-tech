const Carro = require('./models/Carro')
const CarroRepository = require('./repositories/CarroRepository')

function main() {
  let repositorio = new CarroRepository()

  // Listar carros
  repositorio.listarCarros(result => {
    if (result) {
      console.log('carros', result)
    } else {
      console.log('Nenhum carro foi encontrado')
    }
  })

  let carro = new Carro('City', 'Honda', 2022, 'Azul', 5)

  // Adicionar um carro
   repositorio.salvarCarro(carro, result => {
     console.log('Inseriu com sucesso', result)
   })

  // Remove um carro
   repositorio.removerCarro(2, result => console.log('Deletou o item', result))
   repositorio.removerCarro(3)

  // Editar um carro
  // repositorio.editarCarro(carro)

  // Filtrar carros por ano
  // repositorio.filtrarCarrosPorAno(2020, carros => {
  //   console.log(carros)
  // })

 // Listar carros
 repositorio.listarCarros(result => {
    if (result) {
      console.log('carros', result)
    } else {
      console.log('Nenhum carro foi encontrado')
    }
  })  
}

main()