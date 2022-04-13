import { AppInput } from "../../../app"
import { Graphics } from "../../../llui"
import { UIComponent } from "../../component"

export class Pager extends UIComponent {
    constructor(
        public noOfItems: number,
        public index: number,
        x: number, y: number, width: number, height: number,
        public vertical = false
    ) {
        super(x, y, width, height)
    }
    
    public render(gfx: Graphics) {
        gfx.drawPager(
            this.x, this.y, this.width, this.height,
            this.noOfItems, this.index, this.vertical
        )
    }

    public handleInput(input: AppInput): void {
        if (this.vertical) {
            const height = 16 * this.noOfItems
            const start = this.y + (this.height - height) / 2
            const index = Math.floor((input.y - start) / 16)

            if (index >= 0 && index < this.noOfItems) {
                this.index = index
            }
        } else {
            const width = 16 * this.noOfItems
            const start = this.x + (this.width - width) / 2
            const index = Math.floor((input.x - start) / 16)

            if (index >= 0 && index < this.noOfItems) {
                this.index = index
            }
        }

        super.handleInput(input)
    }
}