class Carro{
    constructor (modelo, marca, ano, cor) {
        this._modelo = modelo
        this._marca = marca
        this._ano = ano,
        this._cor = (cor !== "" && cor !== null && cor !== undefined)? cor : "Indefinida"

    }


    setModelo(modelo){
        this._modelo = modelo
    }

    getModelo(){
        return this._modelo

    }

    getMarca(){
        return this._marca

    }

    getAno(){
        return this._ano

    }

    setCor(cor){
        this._cor = (cor !== "" && cor !== null && cor !== undefined)? cor : "Indefinida"
    }

    getCor(){
        return this._cor

    }
}

module.exports = Carro
