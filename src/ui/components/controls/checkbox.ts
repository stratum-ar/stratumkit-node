import { AppInput } from "../../../app"
import { Graphics } from "../../../llui"
import { UIComponent } from "../../component"
import { Alignment } from "../../enums/enums"

export class Checkbox extends UIComponent {
    constructor(
        public checked: boolean,
        public text: string,
        x: number, y: number, width: number, height: number
    ) {
        super(x, y, width, height)
    }

    public render(gfx: Graphics) {
        gfx.drawCheckBox(this.x, this.y + Math.floor((this.height - 16) / 2), this.checked)

        if (this.text.length && this.width > 20) {
            gfx.drawAlignedText(
                this.x + 20, this.y, this.width - 20, this.height,
                Alignment.LEFT, this.text, 255, 255, 255
            )
        }
    }

    public handleInput(input: AppInput): void {
        this.checked = !this.checked
        
        super.handleInput(input)
    }
}