import { UI } from "."
import { AppInput } from "../app"
import { Graphics } from "../llui"

export type InputEvent = {
    input: AppInput,
    target: UIComponent
}

export type InputHandler = (event: InputEvent) => void

export abstract class UIComponent {
    public onInput: InputHandler = (e) => {}

    public ownerUI: UI | null = null

    constructor(
        public x: number,
        public y: number,
        public width: number,
        public height: number
    ) {}

    public click(handler: InputHandler) {
        this.onInput = handler

        return this
    }

    public hitTest(input: AppInput) {
        return (input.x >= this.x) && (input.y >= this.y) &&
               (input.x < this.x + this.width) &&
               (input.y < this.y + this.height)
    }

    public handleInput(input: AppInput) {
        this.onInput({input, target: this})

        if (this.ownerUI) {
            this.ownerUI.render()
        }
    }

    public abstract render(gfx: Graphics): void
}