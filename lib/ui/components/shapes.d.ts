import { Graphics } from "../../llui";
import { UIComponent } from "../component";
export declare class Rectangle extends UIComponent {
    constructor(x: number, y: number, width: number, height: number);
    render(gfx: Graphics): void;
}
