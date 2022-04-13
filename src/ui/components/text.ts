import { Graphics } from "../../llui";
import { Color, convertColorTo8BitTriple } from "../color";
import { UIComponent } from "../component";
import { Alignment } from "../enums/enums";

export class Label extends UIComponent {
    constructor(
        public text: string,
        x: number, y: number, width: number, height: number,
        public alignment = Alignment.TOPLEFT,
        public color = Color.WHITE
    ) {
        super(x, y, width, height)
    }

    public render(gfx: Graphics) {
        const hex = convertColorTo8BitTriple(this.color)

        gfx.drawAlignedText(
            this.x, this.y, this.width, this.height,
            this.alignment,
            this.text,
            hex[0], hex[1], hex[2]
        )
    }
}