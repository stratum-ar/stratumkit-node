import { UI, UIView } from "..";
import { AppInput } from "../../app";
import { Graphics } from "../../llui";
export declare class PaginatedView extends UIView {
    private pages;
    private currentPage;
    private pager;
    constructor(ui: UI);
    get pageCount(): number;
    private get currentComponents();
    private setupPager;
    handleInput(input: AppInput): void;
    render(gfx: Graphics): void;
}
