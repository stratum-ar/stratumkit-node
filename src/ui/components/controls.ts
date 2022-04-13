import { Graphics } from "../../llui"
import { UIComponent } from "../component"
import { EditBoxState } from "../enums/enums"

export class EditBox extends UIComponent {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height)
    }
    public render(gfx: Graphics) {
        gfx.drawEditBox(this.x, this.y, this.width, this.height,
            EditBoxState.OK, "Input Test", true)
    }
}
