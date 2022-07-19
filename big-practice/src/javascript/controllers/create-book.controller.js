export class CreateBookController {
  constructor(model, createBookView) {
    this.model = model;
    this.createBookView = createBookView;
    this.init();
  }

  async init() {
    this.createBookView.bindCreateBook(this.handleCreateBook.bind(this));
    this.createBookView.bindShowImage();
  }
  
  async handleCreateBook(body) {
    await this.model.creatBook(body);
    
  }
}
