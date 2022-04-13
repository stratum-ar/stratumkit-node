import { Graphics } from "../../../llui"
import { UIComponent } from "../../component"

export class Progress extends UIComponent {
    constructor(
        public value: number,
        x: number, y: number, width: number, height: number
    ) {
        super(x, y, width, height)
    }
    
    public render(gfx: Graphics) {
        gfx.drawProgress(
            this.x, this.y, this.width, this.height,
            this.value
        )
    }
}