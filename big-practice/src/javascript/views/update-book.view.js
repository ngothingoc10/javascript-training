export class UpdateBookView {
  constructor() {
    this.updateBookBtn = document.getElementById('update-btn');
    this.cancelBtn = document.getElementById('cancel-btn');
    this.bookName = document.getElementById('book-name');
    this.author = document.getElementById('author');
    this.coverLink = document.getElementById('cover-link');
    this.category = document.getElementById('category');
    this.description = document.getElementById('description');
    this.bookNameMess = document.getElementById('book-name-mess');
    this.authorMess = document.getElementById('author-mess');
    this.coverLinkMess = document.getElementById('cover-link-mess');
    this.categoryMess = document.getElementById('category-mess');
    this.descriptionMess = document.getElementById('description-mess');
    this.coverImage = document.getElementById('cover-image');
  }

  getBookId() {
    const bookId = window.location.search.replace('?id=', '');
    return bookId;
  }

  showBookById(book) {
    console.log(book);
    if (book) {
      this.bookName.value = book.name;
      this.author.value = book.author;
      this.coverLink.value = book.cover;
      this.category.value = parseInt(book.category);
      this.description.value = book.description;
      this.coverImage.src = book.cover;
    }
  }

  showCategories(categories) {
    if (categories.length) {
      categories.forEach((category) => {
        const categoryItem = document.createElement('option');
        categoryItem.value = category.id;
        categoryItem.innerText = category.categoryName;
        this.category.appendChild(categoryItem);
      })
    }
  }

  redirectHomePage() {
    window.location.href = './index.html';
  }

  alertMess() {
    alert('Update book failed!');
  }

  bindShowImage() {
    this.coverLink.addEventListener('blur', () => {
      this.coverImage.src = this.coverLink.value;
    })
  }

  bindCancelUpdateBook() {
    this.cancelBtn.addEventListener('click', () => {
      this.redirectHomePage();
    })
  }

  bindUpdateBook(handleUpdateBook) {
    this.updateBookBtn.addEventListener('click', (event) => {
      // Validation create book form
      event.preventDefault();
      if (this.bookName.value === '') {
        this.bookNameMess.style.display = 'block';
      } else {
        this.bookNameMess.style.display = 'none';
      }
      if (this.author.value === '') {
        this.authorMess.style.display = 'block';
      } else {
        this.authorMess.style.display = 'none';
      }
      if (this.coverLink.value === '') {
        this.coverLinkMess.style.display = 'block';
      } else {
        this.coverLinkMess.style.display = 'none';

      }
      if (this.category.value === '') {
        this.categoryMess.style.display = 'block';
      } else {
        this.categoryMess.style.display = 'none';
      }
      if (this.description.value === '') {
        this.descriptionMess.style.display = 'block';
      } else {
        this.descriptionMess.style.display = 'none';
      }
      if (this.bookName.value && this.author.value && this.coverLink.value && this.category.value && this.description.value) {
        const body = {
          name: this.bookName.value,
          author: this.author.value,
          cover: this.coverLink.value,
          category: this.category.value,
          description: this.description.value
        }
        const bookId = this.getBookId();
        handleUpdateBook(body, bookId);
      }
    })
  }

}
