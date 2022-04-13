import { Graphics } from "../../llui";
import { Color } from "../color";
import { UIComponent } from "../component";
import { Alignment } from "../enums/enums";
export declare class Label extends UIComponent {
    text: string;
    alignment: Alignment;
    color: Color;
    constructor(text: string, x: number, y: number, width: number, height: number, alignment?: Alignment, color?: Color);
    render(gfx: Graphics): void;
}
