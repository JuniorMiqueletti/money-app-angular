import { Person } from './person.model';
import { Category } from './category.model';

export class Release {
    id: number;
    description: string;
    dueDate: Date;
    payDate: Date;
    value: number;
    type: 'RECIPE';
    person = new Person();
    category = new Category();
    observation: string;
}

