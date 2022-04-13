import { Graphics } from "../../../llui";
import { UIComponent } from "../../component";
export declare class Progress extends UIComponent {
    value: number;
    constructor(value: number, x: number, y: number, width: number, height: number);
    render(gfx: Graphics): void;
}
