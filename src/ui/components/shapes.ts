import { Graphics } from "../../llui";
import { UIComponent } from "../component"

export class Rectangle extends UIComponent {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height)
    }

    public render(gfx: Graphics) {
        gfx.fillRect(this.x, this.y, this.width, this.height, 255, 255, 255)
    }
}