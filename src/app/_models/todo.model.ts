export interface TodoForListModel {
  id: number;
  title: string;
  description: string;
}


export class TodoForSaveModel {
  id: number;
  title: string;
  description?: string;
  date: string;  

  constructor(id: number = 0, title: string = '', description: string = '', date: string = new Date().toISOString()) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date; 
  }
}

