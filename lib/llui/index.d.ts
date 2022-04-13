/// <reference types="node" />
import { Alignment, ButtonState, EditBoxState } from "../ui/enums/enums";
export declare class Graphics {
    private rgen;
    drawLine(sx: number, sy: number, ex: number, ey: number, r: number, g: number, b: number): void;
    drawEllipse(x: number, y: number, width: number, height: number, r: number, g: number, b: number): void;
    fillRect(x: number, y: number, width: number, height: number, r: number, g: number, b: number): void;
    drawQuadratic(sx: number, sy: number, cx: number, cy: number, ex: number, ey: number, r: number, g: number, b: number): void;
    drawIcon(x: number, y: number, iconNo: number, r: number, g: number, b: number): void;
    drawPolygon(xs: number[], ys: number[], r: number, g: number, b: number): void;
    drawText(x: number, y: number, text: string, r: number, g: number, b: number): void;
    drawAlignedText(x: number, y: number, width: number, height: number, alignment: Alignment, text: string, r: number, g: number, b: number): void;
    drawButton(x: number, y: number, width: number, height: number, buttonState: ButtonState, text: string, iconNo: number | null): void;
    drawComboBox(x: number, y: number, width: number, height: number, buttonState: ButtonState, text: string): void;
    drawCheckBox(x: number, y: number, isChecked: boolean): void;
    drawSlider(x: number, y: number, width: number, height: number, fillPercentage: number, vertical: boolean): void;
    drawProgress(x: number, y: number, width: number, height: number, progress: number): void;
    drawEditBox(x: number, y: number, width: number, height: number, editBoxState: EditBoxState, text: string, isSelected: boolean, selStart?: number, selEnd?: number): void;
    drawPager(x: number, y: number, width: number, height: number, noOfItems: number, selectedIndex: number, vertical: boolean): void;
    toBuffer(): Buffer;
    private textToBytes;
}
