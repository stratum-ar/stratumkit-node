import { UI } from ".";
import { AppInput } from "../app";
import { Graphics } from "../llui";
export declare type InputEvent = {
    input: AppInput;
    target: UIComponent;
};
export declare type InputHandler = (event: InputEvent) => void;
export declare abstract class UIComponent {
    x: number;
    y: number;
    width: number;
    height: number;
    onInput: InputHandler;
    ownerUI: UI | null;
    constructor(x: number, y: number, width: number, height: number);
    click(handler: InputHandler): this;
    hitTest(input: AppInput): boolean;
    handleInput(input: AppInput): void;
    abstract render(gfx: Graphics): void;
}
