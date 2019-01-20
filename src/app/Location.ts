export class Location {
    public id: number;
    public photo: ImageBitmap;
    public name: string;
    public description: string;
    public location: string;

    constructor(
        id: number,
        // photo: ImageBitmap,
        name: string,
        description: string,
        location: string
    ) {
        this.id = id;
        // this.photo = photo;
        this.name = name;
        this.description = description;
        this.location = location;
    }
}
