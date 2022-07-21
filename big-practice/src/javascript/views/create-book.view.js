export class CreateBookView {
  constructor() {
    this.createBookBtn = document.getElementById('create-btn');
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

  alertMess () {
    alert('Creating book failed!');
  }

  bindShowImage() {
    this.coverLink.addEventListener('blur', () => {
      this.coverImage.src = this.coverLink.value;
    })
  }

  bindCancelCreateBook() {
    this.cancelBtn.addEventListener('click', () => {
      this.redirectHomePage();
    })
  }

  bindCreateBook(handleCreateBook) {
    this.createBookBtn.addEventListener('click', (event) => {
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
          category: parseInt(this.category.value),
          description: this.description.value
        }
        handleCreateBook(body);
      }
    })
  }

}
