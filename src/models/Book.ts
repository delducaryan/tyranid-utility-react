export default class Book {
  id?: string;
  name: string;

  constructor(init?: Pick<Book, "id" | "name">) {
    this.name = "";

    Object.assign(this, init);
  }
}
