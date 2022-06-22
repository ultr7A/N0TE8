import { ContentElement } from "./000_element.interface.js";
import { Surface } from "./108_surface.js";

export class Volume implements ContentElement<Surface> {

    public values: Surface[];

    public version = 0;
    public id:        string; 
    public author_id: string;
    public name: string;
}