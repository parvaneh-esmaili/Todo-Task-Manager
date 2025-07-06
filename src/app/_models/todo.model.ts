export interface TodoForListModel {
  id: number;  
  title: string;
  description: string;
  documentId: string;
}

export class TodoForSaveModel {
  // id: number;
  title: string;
  description?: string;
  date: string;
  // documentId: string;  

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
