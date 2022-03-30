import { Graphics } from "../../llui"
import { UIComponent } from "../component"
import { ButtonState, EditBoxState } from "../enums/enums"

export class Button extends UIComponent {
    constructor(
        public text: string,
        x: number, y: number, width: number, height: number,
        public state = ButtonState.DEFAULT
    ) {
        super(x, y, width, height)
    }
    public render(gfx: Graphics) {
        gfx.drawButton(this.x, this.y, this.width, this.height, 
            this.state, this.text, null)
    }
}

export class Checkbox extends UIComponent {
    constructor(
        public checked: boolean,
        x: number, y: number, width: number, height: number
    ) {
        super(x, y, width, height)
    }
    public render(gfx: Graphics) {
        gfx.drawCheckBox(this.x, this.y, this.width, this.height, this.checked)
    }
}

export class ComboBox extends UIComponent {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height)
    }
    public render(gfx: Graphics) {
        gfx.drawComboBox(this.x, this.y, this.width, this.height,
            ButtonState.PRESSED, "ComboBox Pressed")
    }
}

export class Slider extends UIComponent {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height)
    }
    public render(gfx: Graphics) {
        gfx.drawSlider(this.x, this.y, this.width, this.height, 100, true)
    }
}

export class Progress extends UIComponent {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height)
    }
    public render(gfx: Graphics) {
        gfx.drawProgress(this.x, this.y, this.width, this.height, 100)
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
