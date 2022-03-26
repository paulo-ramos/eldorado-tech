class Author {
    contructor (id, name, age, genre) {
        this._Id = id
        this._name = name
        this._age = age
        this._genre = genre
    }

    getId(){
        return this._Id
    }

    getName(){
        return this._name
    }

    getAge(){
        return this._age
    }

    getGenre(){
        return this._genre
    }
}