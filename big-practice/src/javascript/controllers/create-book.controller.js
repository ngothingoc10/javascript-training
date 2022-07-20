export class CreateBookController {
  constructor(bookModel, categoryModel, createBookView) {
    this.bookModel = bookModel;
    this.categoryModel = categoryModel;
    this.createBookView = createBookView;
    this.init();
  }

  async init() {
    this.handleShowCategories();
    this.createBookView.bindCreateBook(this.handleCreateBook.bind(this));
    this.createBookView.bindShowImage();
    this.createBookView.bindCancelCreateBook();
  }

  async handleShowCategories() {
    const categories = await this.categoryModel.getAllCategories();
    this.createBookView.showCategories(categories);
  }

  async handleCreateBook(body) {
    const res = await this.bookModel.creatBook(body);
    if (res) {
      this.createBookView.redirectHomePage();
    }
    else {
      alert('Creating book failed!');
    }
  }
}
