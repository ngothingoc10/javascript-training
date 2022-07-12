class View {
  constructor() {
    this.bookList = document.getElementById('book-list');
  }

  showBookList = async (bookList) => {
    if (bookList.length) {
      bookList.forEach((book) => {
        const bookItem = document.createElement('tr');
        const bookId = document.createElement('td');
        bookId.textContent = book.id;

        const bookCover = document.createElement('td');
        const bookCoverLink = document.createElement('a');
        const bookCoverImg = document.createElement('img');
        bookCoverImg.src = book.cover;
        bookCoverImg.alt = 'Book cover';
        bookCoverImg.classList.add('book-cover');
        bookCover.appendChild(bookCoverLink);
        bookCoverLink.appendChild(bookCoverImg);

        const bookName = document.createElement('td');
        bookName.textContent = book.name;

        const bookAuthor = document.createElement('td');
        bookAuthor.textContent = book.author;

        const bookEdition = document.createElement('td');
        const editBtn = document.createElement('button');
        const editBtnImage = document.createElement('img');
        editBtnImage.src = require('../../assets/images/edit-icon.svg');
        editBtnImage.alt = 'Edit Icon';
        bookEdition.appendChild(editBtn);
        editBtn.appendChild(editBtnImage);

        const bookDeletion = document.createElement('td');
        const deleteBtn = document.createElement('button');
        const deleteBtnImage = document.createElement('img');
        deleteBtnImage.src =  require('../../assets/images/delete-icon.svg');
        deleteBtnImage.alt = 'Delete Icon';
        bookDeletion.appendChild(deleteBtn);
        deleteBtn.appendChild(deleteBtnImage);

        bookItem.append(bookId, bookCover, bookName, bookAuthor, bookEdition, bookDeletion);
        this.bookList.appendChild(bookItem);
      });
    }
  }
}

export {View} 
