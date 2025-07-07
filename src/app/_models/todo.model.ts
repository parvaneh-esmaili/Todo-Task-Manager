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
    // id: number = 0,
    title: string = '',
    description: string = '',
    date: string = new Date().toISOString(),
    // documentId: string = ''
  ) {
    // this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    // this.documentId = documentId; 
  }
}
