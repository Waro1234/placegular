export class Location {
    public id: number;
    public photo: string;
    public name: string;
    public description: string;
    public location: number[];
    public address: string;

    constructor(
        id: number,
        photo: string,
        name: string,
        description: string,
        location: number[],
        address: string
    ) {
        this.id = id;
        this.photo = photo;
        this.name = name;
        this.description = description;
        this.location = location;
        this.address = address;
    }
}
