let myLibrary = [];
const card = document.getElementById("main-card")
const mainDiv = document.getElementById("main")
const btn = document.getElementById("display-books");


const hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read yet"); 
const lotr= new Book("Lord Of The Rings", "J.R.R Tolkien", 595, "read");
const eragon = new Book("Eragon", "Christopher Paolini", 509, "not read yet");
addBookToLibrary(hobbit);
addBookToLibrary(lotr);
addBookToLibrary(eragon);


function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.getInfo = function(){
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read
}

function addBookToLibrary(book){
    if(myLibrary.some(element => element.title.toLowerCase() === book.title.toLowerCase())){
        return
    }
    else {
    myLibrary.push(book)
    }
}

function bookDisplay(bookArr){
    bookArr.forEach(element => {
        let domBook = document.getElementsByClassName("card")
        for(let i=0; i<domBook.length; i++){
            if(domBook[i].innerText.includes(element.title)){
                return
            }
        }
        let cardDiv = document.createElement("div")
        cardDiv.classList.add("card", "m-2")
        let readDiv = document.createElement("div")
        readDiv.classList.add( "form-check", "form-switch", "d-flex")
        let bookTitle = document.createElement("h5")
        let bookSubtitle = document.createElement("h6")
        let delBtn = document.createElement("a")
        let readSwitchInput = document.createElement("input")
        let readSwitchLabel = document.createElement("label")
        readSwitchInput.classList.add("form-check-input")
        readSwitchInput.setAttribute("type", "checkbox")
        readSwitchInput.setAttribute("id", "flexSwitchCheckDefault")
        readSwitchLabel.classList.add("form-check-label")
        readSwitchLabel.setAttribute("for", "flexSwitchCheckDefault")
        readSwitchLabel.textContent = "Read"
        delBtn.classList.add("btn", "btn-outline-danger", "btn-sm", "float-end")
        delBtn.setAttribute("type", "button")
        delBtn.textContent = "X"
        bookTitle.textContent = element.title 
        bookSubtitle.textContent = element.author
        readDiv.append(readSwitchInput, readSwitchLabel)
        bookTitle.appendChild(delBtn)
        cardDiv.append(bookTitle, bookSubtitle, readDiv)
        main.appendChild(cardDiv)
    });
}

function addNewBook(){
    const inputTitle = document.getElementById("book-title").value
    const inputAuthor = document.getElementById("book-author").value
    const inputPages = document.getElementById("book-pages").value
    const inputRead = document.getElementById("book-read").value
    const newBook = new Book(inputTitle, inputAuthor, inputPages, inputRead)
    addBookToLibrary(newBook)
    bookDisplay(myLibrary)
    deleteBook()
}


function deleteBook(){
    mainDiv.addEventListener("click", function(e){
        if(e.target.type === "button"){
            e.target.offsetParent.remove()
        }
    })
}


btn.addEventListener("click", addNewBook);


