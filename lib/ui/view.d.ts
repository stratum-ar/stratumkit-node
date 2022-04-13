import { UI } from ".";
import { AppInput } from "../app";
import { Graphics } from "../llui";
import { UIComponent } from "./component";
export declare class UIView {
    readonly ui: UI;
    private components;
    constructor(ui: UI);
    handleInput(input: AppInput): void;
    add(...components: UIComponent[]): void;
    remove(component: UIComponent): void;
    render(gfx: Graphics): void;
}
export declare class PaginatedView extends UIView {
    private pages;
    private currentPage;
    private pager;
    constructor(ui: UI);
    get pageCount(): number;
    private get currentComponents();
    private setupPager;
    private updatePager;
    addPage(): void;
    insertPage(index: number): void;
    setPage(index: number): void;
    addTo(index: number, ...components: UIComponent[]): void;
    removeFrom(index: number, component: UIComponent): void;
    add(...components: UIComponent[]): void;
    remove(component: UIComponent): void;
    handleInput(input: AppInput): void;
    render(gfx: Graphics): void;
}
