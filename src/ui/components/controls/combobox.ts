import { UI } from "../.."
import { AppInput } from "../../../app"
import { Graphics } from "../../../llui"
import { UIComponent } from "../../component"
import { ButtonState } from "../../enums/enums"
import { PaginatedView } from "../../view"
import { Button } from "./button"

class ComboBoxSelectorView extends PaginatedView {
    private backButton = new Button(
        "Back", 42, 16, 50, 20
    ).click(() => this.ui.back())

    constructor(
        ui: UI,
        private options: string[],
        private selected: number,
        private selectionHandler: (index: number) => void
    ) {
        super(ui)

        this.prepPages()
    }

    private prepPages() {
        const optionsPerPage = 6
        const pageCount = Math.ceil(this.options.length / optionsPerPage)

        for (let i = 0; i < pageCount; i++) {
            this.addPage()
            this.addTo(i, this.backButton)
        }

        for (let i = 0; i < this.options.length; i++) {
            const pageIndex = Math.floor(i / optionsPerPage)
            const offset = i % optionsPerPage
            
            this.addTo(
                pageIndex,
                new Button(
                    this.options[i],
                    16, 42 + 26 * offset, 208, 24,
                    (i === this.selected) ? ButtonState.HIGHLIGHTED : ButtonState.DEFAULT
                ).click(() => {
                    this.selectionHandler(i)
                })
            )
        }

        this.setPage(Math.floor(this.selected / optionsPerPage))
    }
}

export class ComboBox extends UIComponent {
    constructor(
        public options: string[],
        public selected: number,
        x: number, y: number, width: number, height: number,
        public state = ButtonState.DEFAULT
    ) {
        super(x, y, width, height)
    }

    public get text() {
        if (
            this.selected < 0 || this.selected >= this.options.length
        ) {
            return ""
        }

        return this.options[this.selected]
    }

    public handleInput(input: AppInput): void {
        if (!this.ownerUI) {
            return
        }

        const selectorView = new ComboBoxSelectorView(
            this.ownerUI, this.options, this.selected,
            (index) => {
                this.selected = index
                this.ownerUI?.back()

                super.handleInput(input)
            }
        )

        this.ownerUI.navigate(selectorView)
        this.ownerUI.render()
    }
    
    public render(gfx: Graphics) {
        gfx.drawComboBox(
            this.x, this.y, this.width, this.height,
            this.state,
            this.text
        )
    }
}