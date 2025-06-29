export class TodoForListModel {
  id: number;
  title: string;
  description?: string;
  date: Date;

  constructor(id: number = 0, title: string = '', description: string = '', date: Date = new Date()) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
  }
}


export class TodoForSaveModel {
  id: number;
  title: string;
  description?: string;
  date: Date;

  constructor(id: number = 0, title: string = '', description: string = '', date: Date = new Date()) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
  }
}

