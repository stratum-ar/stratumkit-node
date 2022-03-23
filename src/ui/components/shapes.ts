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

export class Button extends UIComponent {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height)
    }
    public render(gfx: Graphics) {
        gfx.drawButton(this.x, this.y, this.width, this.height, 
            ButtonState.PRESSED, "Button Pressed", null, 255, 255, 255)
    }
}

export class Checkbox extends UIComponent {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height)
    }
    public render(gfx: Graphics) {
        gfx.drawCheckBox(this.x, this.y, this.width, this.height, true)
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

