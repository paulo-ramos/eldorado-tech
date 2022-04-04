class Author {
    constructor (id, name, yearOfBirth, genre, image) {
        this._id = id
        this._name = name
        this._yearOfBirth = yearOfBirth
        this._genre = genre
        this._image = image
    }

    getId(){
        return this._id
    }

    getName(){
        return this._name
    }

    getYearOfBirth(){
        return this._yearOfBirth
    }

    getGenre(){
        return this._genre
    }

    getImage(){
        return `<figure><img src="../../www/images/${this._image}.jpg" alt="Escritores brasileiros:${this._name}" width="60" height="50" ></figure>`
    }
}