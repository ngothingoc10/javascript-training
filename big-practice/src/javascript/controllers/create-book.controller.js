export class CreateBookController {
  constructor(bookModel, categoryModel, createBookView) {
    this.bookModel = bookModel;
    this.categoryModel = categoryModel;
    this.createBookView = createBookView;
    this.init();
  }

  /**
   * Show categories after call API
   * Attaching event handlers to specified elements on the create book page
   */

  async init() {
    this.handleShowCategories();
    this.createBookView.bindCreateBook(this.handleCreateBook.bind(this));
    this.createBookView.bindShowImage();
    this.createBookView.bindCancelCreateBook();
  }

  /**
   * Get categories from the category model
   * Show the categories to the creating book page
   */
  async handleShowCategories() {
    const categories = await this.categoryModel.getAllCategories();
    this.createBookView.showCategories(categories);
  }

  /**
   * Use body from the creating book view to call the book model for create book
   * @param {object} body 
   */

  async handleCreateBook(body) {
    const res = await this.bookModel.creatBook(body);
    if (res) {
      this.createBookView.redirectHomePage();
    }
    else {
      this.createBookView.alertMess();
    }
  }
}
