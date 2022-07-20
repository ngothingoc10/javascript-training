export class CreateBookController {
  constructor(model, createBookView) {
    this.model = model;
    this.createBookView = createBookView;
    this.init();
  }

  async init() {
    this.createBookView.bindCreateBook(this.handleCreateBook.bind(this));
    this.createBookView.bindShowImage();
    this.createBookView.bindCancelCreateBook();
  }
  
  async handleCreateBook(body) {
   const res =  await this.model.creatBook(body);
    if (res) {
      this.createBookView.redirectHomePage();
    }
  }
}
