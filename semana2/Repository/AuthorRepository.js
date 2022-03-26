class AuthorRepository{
    constructor(){
        this._authors = []
        this._keyAuthor = "author"

        if (localStorage.getItem(this._keyAuthor)=== null){
            localStorage.setItem(this._keyAuthor, JSON.stringify(this._authors))
        }
    }

    _formatAuthors(){
        let authorJson = localStorage.getItem(this._keyAuthor)
        let classlessAuthor = JSON.parse(authorJson)
        this._authors = classlessAuthor.map(
            author => new Author(author._id, author._name, author._age, author._genre)
        )
    }

    GetAll(){
        this._formatAuthors()

        return[...this._authors]
    }

    GetById(id){
        this._formatAuthors()
        
        this._authors.filter(author => author.getId() === id)
    }

    GetByName(name){
        this._formatAuthors()
        
        this._authors.filter(author => author.getName() === name)
    }

    GetByAge(age){
        this._formatAuthors()
        
        this._authors.filter(author => author.getAge() === age)
    }

    GetByGenre(genre){
        this._formatAuthors()
        
        this._authors.filter(author => author.getGenre() === genre)
    }


    Save(author){
        if (author instanceof Author){
            this._formatAuthors()            
            this._authors.push(author)
            this._SaveStorageAuthors(this._authors)
        }
    }


    Update(newAuthor){
        this._formatAuthors()

        this._authors = this._authors.map(author => {
            if (author.getId() === newAuthor.getId()){
                return newAuthor
            }
            else{
                return author
            }
        })

        this._SaveStorageAuthors(this._authors)
    }

    Delete(id){
        this._formatAuthors()
        this._SaveStorageAuthors(this._authors.filter(author => author.getId() !== id))
    }


    _SaveStorageAuthors(author){
        localStorage.setItem(this._keyAuthor, author)
    }






}