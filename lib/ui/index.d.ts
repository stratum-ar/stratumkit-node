import { App, AppInput } from "../app";
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
export declare class UI {
    private app;
    private views;
    private viewIndex;
    constructor(app: App);
    get currentView(): UIView | null;
    createView(creator: (view: UIView) => void): UIView;
    navigate(view: UIView): void;
    handleInput(input: AppInput): void;
    render(): void;
}
