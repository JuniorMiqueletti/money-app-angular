export class Person {
    id: number;
    name: string;
    address = new Address();
}

class Address {
    city: string;
    complement: string;
    neighborhood: string;
    number: number;
    public_place: string;
    state: string;
    zip_code: string;
}
