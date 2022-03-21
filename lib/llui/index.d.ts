/// <reference types="node" />
export declare class Graphics {
    private rgen;
    drawLine(sx: number, sy: number, ex: number, ey: number, r: number, g: number, b: number): void;
    drawEllipse(x: number, y: number, width: number, height: number, r: number, g: number, b: number): void;
    fillRect(x: number, y: number, width: number, height: number, r: number, g: number, b: number): void;
    drawQuadratic(sx: number, sy: number, cx: number, cy: number, ex: number, ey: number, r: number, g: number, b: number): void;
    toBuffer(): Buffer;
}
