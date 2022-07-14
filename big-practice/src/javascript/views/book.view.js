export class View {
  constructor() {
    this.bookList = document.getElementById('book-list');
    this.btnModalDelete = document.getElementById('btn-modal-delete');
    this.btnModalCancel = document.getElementById('btn-modal-cancel');
    this.deleteModal = document.getElementById('delete-modal');
  }

  showBookList(books) {
    this.bookList.innerHTML = '';
    if (books.length) {
      let count = 0;
      books.forEach((book) => {
        const bookItem = document.createElement('tr');
        bookItem.id = book.id;
        const bookId = document.createElement('td');
        count = count + 1;
        bookId.textContent = count;

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
        editBtn.classList.add('edit-btn');
        const editBtnImage = document.createElement('img');
        editBtnImage.src = require('../../assets/images/edit-icon.svg');
        editBtnImage.alt = 'Edit Icon';
        bookEdition.appendChild(editBtn);
        editBtn.appendChild(editBtnImage);

        const bookDeletion = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.dataset.toggle = 'modal';
        deleteBtn.dataset.target = '#delete-modal';
        const deleteBtnImage = document.createElement('img');
        deleteBtnImage.src = require('../../assets/images/delete-icon.svg');
        deleteBtnImage.alt = 'Delete Icon';
        deleteBtnImage.classList.add('edit-btn__img');
        bookDeletion.appendChild(deleteBtn);
        deleteBtn.appendChild(deleteBtnImage);

        bookItem.append(bookId, bookCover, bookName, bookAuthor, bookEdition, bookDeletion);
        this.bookList.appendChild(bookItem);
      });
    }
  }

  removeBook(id) {
    const removedElement = document.getElementById(id);
    console.log('curr', removedElement)
    let el = removedElement.nextSibling;
    console.log('el', el);

    while (el) {
      console.log(el);
      el.firstChild.textContent = parseInt(el.firstChild.textContent) - 1;
      el = el.nextSibling;
    }

    this.bookList.removeChild(removedElement);
    removedElement.remove();
  }

  bindDeleteBook(handleDeleteBook) {
    this.bookList.addEventListener('click', function handleRemoveBook(event) {
      console.log(event.target);
      if (event.target.className === 'edit-btn__img') {
        const modalDeleteBtn = document.getElementById('btn-modal-delete');
        modalDeleteBtn.addEventListener('click', function handleConfirmRemoveBook() {
          this.removeEventListener('click', handleConfirmRemoveBook);
          console.log('this', this);
          const id = event.target.parentElement.parentElement.parentElement.id;
          console.log(id, id);
          handleDeleteBook(id);
        });
      }
    })
  }
}
