import { AppInput } from "../app"
import { Graphics } from "../llui"

export abstract class UIComponent {
    public onInput = (input?: AppInput) => {}

    constructor(
        public x: number,
        public y: number,
        public width: number,
        public height: number
    ) {}

    public click(handler: (input?: AppInput) => void) {
        this.onInput = handler

        return this
    }

    public hitTest(input: AppInput) {
        return (input.x >= this.x) && (input.y >= this.y) &&
               (input.x < this.x + this.width) &&
               (input.y < this.y + this.height)
    }

    public handleInput(input: AppInput) {
        this.onInput(input)
    }

    public abstract render(gfx: Graphics): void
}