export class TodoForListModel {
  constructor(
    public id: number = 0,
    public title: string = '',
    public description: string = '',
    public documentId: string = ''
  ) {}
}

export class TodoForSaveModel {
  title: string;
  description?: string;
  date: string;

  constructor(
    title: string = '',
    description: string = '',
    date: string = new Date().toISOString()
  ) {
    this.title = title;
    this.description = description;
    this.date = date;
  }
}
