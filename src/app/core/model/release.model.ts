import { People } from './people.model';
import { Category } from './category.model';

export class Release {
    id: number;
    description: string;
    dueDate: Date;
    payDate: Date;
    value: number;
    type: 'RECIPE';
    people = new People();
    category = new Category();
    observation: string;
}

