let myLibrary = [];


function addBookToLibrary(book) {
    myLibrary.push(book);
}

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " + read;
    }

    this.toggleRead = function() {
        if (this.read === "read") {
            this.read = "not read";
        } 
        else if (this.read === "not read") {
            this.read = "read";
        }
        else {
            this.read = "not read";
        }
    }

    this.getReadButtonText = function() {
        if (this.read === "read") {
            return "Not Read?";
        }
        else {
            return "Read?";
        }
    }
};

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read");
addBookToLibrary(hobbit);
console.log(hobbit.info());

const babbit = new Book();
addBookToLibrary(babbit);
console.log(babbit.info());

function render() {
    //let body = document.querySelector("body");
    let container = document.querySelector("div")
    // let container = document.createElement("div");
    // container.setAttribute("id", "container");
    // body.appendChild(container);

    myLibrary.forEach(createCell);

    function createCell(book) {
        console.log(book.title);
        let currentNode = document.createElement("div");

        let title = document.createElement("p");
        let author = document.createElement("p");
        let readStatus = document.createElement("p");
        let readButton = document.createElement("button");
        
        title.setAttribute("class", "title");
        author.setAttribute("class", "author");
        readStatus.setAttribute("class", "readStatus");
        readButton.setAttribute("class", "readButton");

        title.textContent = book.title;
        author.textContent = book.author;
        readStatus.textContent = book.read;
        readButton.textContent = book.getReadButtonText();

        currentNode.appendChild(title);
        currentNode.appendChild(author);
        currentNode.appendChild(readStatus);
        currentNode.appendChild(readButton);
        container.appendChild(currentNode);
    }
}


render();