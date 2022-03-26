class BookRepository{
    constructor(){
        this._books = []
        this._keyBook = "book"

        if (localStorage.getItem(this._keyBook)=== null){
            localStorage.setItem(this._keyBook, JSON.stringify(this._books))
        }
    }

    _formatBooks(){
        let booksJson = localStorage.getItem(this._keyBook)
        let classlessBook = JSON.parse(booksJson)
        this._books = classlessBook.map(
            book => new Book(book._id, book._title, book._sumary, book._pages, book._year, book._publishingCompany, book._authorId)
        )
    }

    GetAll(){
        this._formatBooks()

        return[...this._books]
    }

    GetById(id){
        this._formatBooks()
        
        this._books.filter(book => book.getId() === id)
    }

    GetByTitle(title){
        this._formatBooks()
        
        this._books.filter(book => book.getTitle() === title)
    }

    GetByPages(pages){
        this._formatBooks()
        
        this._books.filter(book => book.getPages() === pages)
    }

    GetByYear(year){
        this._formatBooks()
        
        this._books.filter(book => book.getYear() === year)
    }

    GetByPublishingCompany(publishingCompany){
        this._formatBooks()
        
        this._books.filter(book => book.getPublishingCompany() === publishingCompany)
    }

    GetByAuthor(author){
        this._formatBooks()
        
        this._books.filter(book => book.getAuthorId() === author.getId())
    }


    Save(book){
        if (book instanceof Book){
            this._formatBooks()            
            this._books.push(book)
            this._SaveStorageBooks(this._books)
        }
    }


    Update(newBook){
        this._formatBooks()

        this._books = this._books.map(book => {
            if (book.getId() === newBook.getId()){
                return newBook
            }
            else{
                return book
            }
        })

        this._SaveStorageBooks(this._books)
    }

    Delete(id){
        this._formatBooks()
        this._SaveStorageBooks(this._books.filter(book => book.getId() !== id))
    }


    _SaveStorageBooks(book){
        localStorage.setItem(this._keyBook, book)
    }






}