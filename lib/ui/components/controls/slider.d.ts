import { AppInput } from "../../../app";
import { Graphics } from "../../../llui";
import { UIComponent } from "../../component";
export declare class Slider extends UIComponent {
    value: number;
    vertical: boolean;
    constructor(value: number, x: number, y: number, width: number, height: number, vertical?: boolean);
    render(gfx: Graphics): void;
    handleInput(input: AppInput): void;
}
