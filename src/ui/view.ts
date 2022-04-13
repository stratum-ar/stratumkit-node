import { UI } from "."
import { AppInput } from "../app"
import { Graphics } from "../llui"
import { UIComponent } from "./component"
import { Pager } from "./components/controls/pager"

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
        components.forEach(component => component.ownerUI = this.ui)
        
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

export class PaginatedView extends UIView {
    private pages: UIComponent[][] = []
    private currentPage = 0

    private pager: Pager = new Pager(0, 0, 0, 210, 240, 16)

    constructor(ui: UI) {
        super(ui)

        this.setupPager()
    }

    public get pageCount() {
        return this.pages.length
    }

    private get currentComponents() {
        if (
            this.currentPage < 0 ||
            this.currentPage >= this.pageCount
        ) {
            return []
        } else {
            return this.pages[this.currentPage]
        }
    }

    private setupPager() {
        this.pager.click(() => {
            this.currentPage = this.pager.index
        })
        super.add(this.pager)
    }

    private updatePager() {
        this.pager.noOfItems = this.pages.length
        this.pager.index = Math.max(0, this.currentPage)
    }

    public addPage() {
        this.pages.push([])
        this.updatePager()
    }

    public insertPage(index: number) {
        this.pages.splice(index, 0, [])
        this.updatePager()
    }

    public setPage(index: number) {
        if (index < 0 || index >= this.pageCount) {
            return
        }

        this.currentPage = index
        this.updatePager()

        this.ui.render()
    }

    public addTo(index: number, ...components: UIComponent[]) {
        if (index < 0 || index >= this.pageCount) {
            return
        }

        const target = this.pages[index]

        components.forEach(component => component.ownerUI = this.ui)
        target.push(...components)
    }

    public removeFrom(index: number, component: UIComponent) {
        if (index < 0 || index >= this.pageCount) {
            return
        }

        const target = this.pages[index]

        const componentIndex = target.indexOf(component)

        if (componentIndex >= 0) {
            target.splice(componentIndex, 1)
        }
    }

    public add(...components: UIComponent[]) {
        components.forEach(component => component.ownerUI = this.ui)
        this.currentComponents.push(...components)
    }

    public remove(component: UIComponent) {
        const index = this.currentComponents.indexOf(component)

        if (index >= 0) {
            this.currentComponents.splice(index, 1)
        }
    }

    public handleInput(input: AppInput) {
        super.handleInput(input)

        for (const component of this.currentComponents) {
            if (component.hitTest(input)) {
                component.handleInput(input)
                return
            }
        }
    }

    public render(gfx: Graphics) {
        super.render(gfx)

        for (const component of this.currentComponents) {
            component.render(gfx)
        }
    }
}