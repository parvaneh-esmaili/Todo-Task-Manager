type Todo ={
    id: number;
    title: string;
    description: string;
    date: Date
}

export class TodoForListModel{

    todo: Todo;
    constructor(todo:Todo) {
        this.todo= todo
    }
}


export class TodoForSaveModel{

    todo: Todo;
    constructor(todo:Todo) {
        this.todo= todo
    }
}
