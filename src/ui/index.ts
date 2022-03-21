import { App, AppInput } from "../app"
import { Graphics } from "../llui"
import { UIComponent } from "./component"

export class UIView {
    private components: UIComponent[] = []

    constructor (
        public readonly ui: UI
    ) {}

    public handleInput(input: AppInput) {
        for (const component of this.components) {
            if (component.hitTest(input)) {
                component.handleInput(input)
                return
            }
        }
    }

    public add(...components: UIComponent[]) {
        this.components.push(...components)
    }

    public remove(component: UIComponent) {
        const index = this.components.indexOf(component)

        if (index >= 0) {
            this.components.splice(index, 1)
        }
    }

    public render(gfx: Graphics) {
        for (const component of this.components) {
            component.render(gfx)
        }
    }
}

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