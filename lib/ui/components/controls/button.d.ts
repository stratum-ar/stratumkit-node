import { Graphics } from "../../../llui";
import { UIComponent } from "../../component";
import { ButtonState } from "../../enums/enums";
export declare class Button extends UIComponent {
    text: string;
    state: ButtonState;
    constructor(text: string, x: number, y: number, width: number, height: number, state?: ButtonState);
    render(gfx: Graphics): void;
}
