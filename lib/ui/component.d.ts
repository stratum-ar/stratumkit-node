import { AppInput } from "../app";
import { Graphics } from "../llui";
export declare abstract class UIComponent {
    x: number;
    y: number;
    width: number;
    height: number;
    onInput: (input?: AppInput | undefined) => void;
    constructor(x: number, y: number, width: number, height: number);
    click(handler: (input?: AppInput) => void): this;
    hitTest(input: AppInput): boolean;
    handleInput(input: AppInput): void;
    abstract render(gfx: Graphics): void;
}
