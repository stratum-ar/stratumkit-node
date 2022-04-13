import { AppInput } from "../../../app";
import { Graphics } from "../../../llui";
import { UIComponent } from "../../component";
export declare class Checkbox extends UIComponent {
    checked: boolean;
    text: string;
    constructor(checked: boolean, text: string, x: number, y: number, width: number, height: number);
    render(gfx: Graphics): void;
    handleInput(input: AppInput): void;
}
