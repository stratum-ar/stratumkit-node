import { AppInput } from "../../../app";
import { Graphics } from "../../../llui";
import { UIComponent } from "../../component";
export declare class Pager extends UIComponent {
    noOfItems: number;
    index: number;
    vertical: boolean;
    constructor(noOfItems: number, index: number, x: number, y: number, width: number, height: number, vertical?: boolean);
    render(gfx: Graphics): void;
    handleInput(input: AppInput): void;
}
