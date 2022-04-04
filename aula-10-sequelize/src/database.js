const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('eldorado','root', '1q2w3e4r@#$', {
    dialect:'mysql',
    host:'localhost',
    post: '3306'
})