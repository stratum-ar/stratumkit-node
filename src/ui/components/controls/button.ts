import { Graphics } from "../../../llui"
import { UIComponent } from "../../component"
import { ButtonState } from "../../enums/enums"

export class Button extends UIComponent {
    constructor(
        public text: string,
        x: number, y: number, width: number, height: number,
        public state = ButtonState.DEFAULT
    ) {
        super(x, y, width, height)
    }
    
    public render(gfx: Graphics) {
        gfx.drawButton(
            this.x, this.y, this.width, this.height, 
            this.state, this.text, null
        )
    }
}