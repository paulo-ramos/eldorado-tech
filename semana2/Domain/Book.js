class Book {
    contructor (title, sumary, pages, year, publishingCompany, author) {
        this._Id = (id !== "" && id !== null && id !== undefined) ? id : NewGuid()
        this._title = title
        this._sumary = sumary
        this._pages = pages
        this._year = year
        this._publishingCompany = publishingCompany
        this._autorId = (author.getId())
    }

    getId(){
        return this._Id
    }

    getTitle(){
        return this._title
    }

    getSumary(){
        return this._sumary
    }

    getPages(){
        return this._pages
    }

    getYear(){
        return this._year
    }

    getPublishingCompany(){
        return this._publishingCompany
    }

    getAutorId(){
        return this._autorId
    }

}