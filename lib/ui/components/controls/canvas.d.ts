import { Graphics } from "../../../llui";
import { UIComponent } from "../../component";
export declare class Canvas extends UIComponent {
    renderFunction: (gfx: Graphics) => void;
    constructor(renderFunction: (gfx: Graphics) => void);
    render(gfx: Graphics): void;
}
