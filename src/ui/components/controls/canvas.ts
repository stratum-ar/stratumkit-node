import { Graphics } from "../../../llui";
import { UIComponent } from "../../component";

export class Canvas extends UIComponent {
    constructor(
        public renderFunction: (gfx: Graphics) => void
    ) {
        super(0, 0, 0, 0)
    }

    public render(gfx: Graphics): void {
        this.renderFunction(gfx)
    }
}