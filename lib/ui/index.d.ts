import { App, AppInput } from "../app";
import { UIView, PaginatedView } from "./view";
export declare class UI {
    private app;
    private views;
    private viewIndex;
    constructor(app: App);
    get currentView(): UIView | null;
    createView(creator: (view: UIView) => void): UIView;
    createPaginatedView(creator: (view: PaginatedView) => void): PaginatedView;
    back(): void;
    navigate(view: UIView): void;
    handleInput(input: AppInput): void;
    render(): void;
}
