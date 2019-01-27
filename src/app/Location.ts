export class Location {
    public photo: string;
    public name: string;
    public description: string;
    public location: number[];
    public address: string;

    constructor(
        photo: string,
        name: string,
        description: string,
        location: number[],
        address: string
    ) {
        this.photo = photo;
        this.name = name;
        this.description = description;
        this.location = location;
        this.address = address;
    }
}
