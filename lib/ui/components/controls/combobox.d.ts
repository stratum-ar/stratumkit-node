import { AppInput } from "../../../app";
import { Graphics } from "../../../llui";
import { UIComponent } from "../../component";
import { ButtonState } from "../../enums/enums";
export declare class ComboBox extends UIComponent {
    options: string[];
    selected: number;
    state: ButtonState;
    constructor(options: string[], selected: number, x: number, y: number, width: number, height: number, state?: ButtonState);
    get text(): string;
    handleInput(input: AppInput): void;
    render(gfx: Graphics): void;
}
