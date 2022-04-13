import { AppInput } from "../../../app"
import { Graphics } from "../../../llui"
import { UIComponent } from "../../component"

export class Slider extends UIComponent {
    constructor(
        public value: number,
        x: number, y: number, width: number, height: number,
        public vertical = false
    ) {
        super(x, y, width, height)
    }
    
    public render(gfx: Graphics) {
        gfx.drawSlider(
            this.x, this.y, this.width, this.height,
            this.value, this.vertical
        )
    }

    public handleInput(input: AppInput): void {
        if (this.vertical) {
            this.value = 1 - (input.y - this.y) / this.height
        } else {
            this.value = (input.x - this.x) / this.width
        }

        super.handleInput(input)
    }
}