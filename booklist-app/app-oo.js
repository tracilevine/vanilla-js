
//  CLASSES
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class UI {
    addBookToTable(bookObject) {
        let tr = document.createElement('tr');
        let row = `<td>${bookObject.title}</td>
                   <td>${bookObject.author}</td>
                   <td><a href="#" class="btn btn-danger btn-sm">X</a></td>
                  `
        tr.innerHTML = row;
        tableBody.appendChild(tr);
        form.reset();
    }
    showAlert(message, nameOfClass) {
        alertDiv.style.display = 'block';
        alertDiv.textContent = message;
        alertDiv.className = nameOfClass;
        setTimeout(() => {
            alertDiv.style.display = 'none';
            bookTitle.focus();
        }, 1500)
    }
    removeItem(targetEvent) {
        if(targetEvent.classList.contains('btn-danger')) {
            targetEvent.parentElement.parentElement.remove();
        }
    }
}
const updateInterface = new UI;

// DOM  VARIABLES
let form = document.querySelector('#book-form'),
    bookTitle = document.querySelector('#title'),
    bookAuthor = document.querySelector('#author'),
    alertDiv = document.querySelector('#alert'),
    tableBody = document.querySelector('#book-list');

//  EVENT LISTENERS
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const bookName = bookTitle.value,
          authorName = bookAuthor.value;

    const book = new Book(bookName, authorName);
    if (bookName === '' || authorName === '') {
        updateInterface.showAlert('All fields are mandatory!', 'alert-danger');
    }
    else {
        updateInterface.addBookToTable(book);
        updateInterface.showAlert('Book Added!', 'alert-success')
    }
})
tableBody.addEventListener('click', function(e) {
    updateInterface.removeItem(e.target);
    updateInterface.showAlert('Item Removed!', 'alert-warning')
}) 

