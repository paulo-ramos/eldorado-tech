class AuthorRepository{
    constructor(){
        this._authors = []
        this._keyAuthor = "author"

        if (localStorage.getItem(this._keyAuthor)=== null){
            localStorage.setItem(this._keyAuthor, JSON.stringify(this._authors))
        }
    }
    
    _formatAuthors(){
        let authorsJson = localStorage.getItem(this._keyAuthor)
        let Authors = JSON.parse(authorsJson)
        this._authors = Authors.map(
            author => new Author(author._id, author._name, author._yearOfBirth, author._genre, author._image)
        )
    }

    GetAll(){
        this._formatAuthors()

        return[...this._authors]
    }

    GetById(id){
        this._formatAuthors()
        
        this._authors.filter(author => author.getid() === id)
    }
    

    GetByName(name){
        this._formatAuthors()
        
        this._authors.filter(author => author.getName() === name)
    }

    GetByAge(yearOfBirth){
        this._formatAuthors()
        
        this._authors.filter(author => author.getYearOfBirth() === yearOfBirth)
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


    _SaveStorageAuthors(authors){
        localStorage.setItem(this._keyAuthor, JSON.stringify(authors))
    }


    _TableAuthor(){
		$("#tableAuthor").html("");
		$("#tableAuthor").html(
			"<thead>"+
			"	<tr>"+			
			"	    <th>Id</th>"+
			"	    <th>Nome</th>"+
			"	    <th>Idade</th>"+
			"	    <th>Genero</th>"+
            "       <th></th>"+
			"	</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"
			);

		 for(var i in tbClientes){
			var cli = JSON.parse(tbClientes[i]);
		  	$("#tableAuthor tbody").append("<tr>"+
									 	 "	<td><img src='edit.png' alt='"+i+"' class='btnEditar'/><img src='delete.png' alt='"+i+"' class='btnExcluir'/></td>" + 
										 "	<td>"+cli.Codigo+"</td>" + 
										 "	<td>"+cli.Nome+"</td>" + 
										 "	<td>"+cli.Telefone+"</td>" + 
										 "	<td>"+cli.Email+"</td>" + 
		  								 "</tr>");
		 }
	}






}