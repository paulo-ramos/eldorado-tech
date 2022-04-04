const Carro = require('./carro')

(async () => {   


    

    sequelize.define('carros', {
        carro_id:{
            type: Sequelize.INTEGER,
            autoincrement: true,
            primaryKey: true,
            allowNull: false
        },
        carro_modelo:{
            type: sequelize.STRING,
            allowNull: false
        },
        carro_marca:{
            type: sequelize.STRING,
            allowNull: false
        },
        carro_ano:{
            type: sequelize.INTEGER,
            allowNull: false
        },
        carro_cor:{
            type: sequelize.STRING,
            allowNull: false
        }
    })

    const carros = await Carro.findAll()

    

    console.log(carros)
 
})()