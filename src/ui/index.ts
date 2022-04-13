import { App, AppInput } from "../app"
import { Graphics } from "../llui"
import { UIComponent } from "./component"
import { UIView, PaginatedView } from "./view"

export class UI {
    private views: UIView[] = []
    private viewIndex = -1

    constructor(
        private app: App
    ) {}

    public get currentView() {
        if (this.views.length === 0) {
            return null
        }

        return this.views[this.viewIndex]
    }

    public createView(creator: (view: UIView) => void): UIView {
        const view = new UIView(this)

        creator(view)

        return view
    }

    public createPaginatedView(
        creator: (view: PaginatedView) => void
    ): PaginatedView {
        const view = new PaginatedView(this)

        creator(view)

        return view
    }

    public back() {
        if (this.viewIndex > 0) {
            this.viewIndex -= 1
            this.render()
        }
    }

    public navigate(view: UIView) {
        const nextIndex = this.viewIndex + 1

        if (nextIndex >= this.views.length) {
            this.views.push(view)
        } else {
            this.views = [
                ...this.views.slice(0, nextIndex),
                view
            ]
        }

        this.viewIndex = nextIndex
    }

    public handleInput(input: AppInput) {
        this.currentView?.handleInput(input)
    }

    public render() {
        const gfx = new Graphics()

        this.currentView?.render(gfx)

        this.app.sendCommand(0x10, gfx.toBuffer())
    }
}