import { Graphics } from "../../llui"
import { UIComponent } from "../component"
import { ButtonState, EditBoxState } from "../enums/enums"

export class ComboBox extends UIComponent {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height)
    }
    public render(gfx: Graphics) {
        gfx.drawComboBox(this.x, this.y, this.width, this.height,
            ButtonState.PRESSED, "ComboBox Pressed")
    }
}

export class EditBox extends UIComponent {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height)
    }
    public render(gfx: Graphics) {
        gfx.drawEditBox(this.x, this.y, this.width, this.height,
            EditBoxState.OK, "Input Test", true)
    }
}

export class Pager extends UIComponent {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height)
    }
    public render(gfx: Graphics) {
        gfx.drawPager(this.x, this.y, this.width, this.height,
            5, 5, true)
    }
}
