import { Graphics } from "../../llui";
import { UIComponent } from "../component";
import { ButtonState } from "../enums/enums";
export declare class Button extends UIComponent {
    text: string;
    state: ButtonState;
    constructor(text: string, x: number, y: number, width: number, height: number, state?: ButtonState);
    render(gfx: Graphics): void;
}
export declare class Checkbox extends UIComponent {
    constructor(x: number, y: number, width: number, height: number);
    render(gfx: Graphics): void;
}
export declare class ComboBox extends UIComponent {
    constructor(x: number, y: number, width: number, height: number);
    render(gfx: Graphics): void;
}
export declare class Slider extends UIComponent {
    constructor(x: number, y: number, width: number, height: number);
    render(gfx: Graphics): void;
}
export declare class Progress extends UIComponent {
    constructor(x: number, y: number, width: number, height: number);
    render(gfx: Graphics): void;
}
export declare class EditBox extends UIComponent {
    constructor(x: number, y: number, width: number, height: number);
    render(gfx: Graphics): void;
}
export declare class Pager extends UIComponent {
    constructor(x: number, y: number, width: number, height: number);
    render(gfx: Graphics): void;
}
