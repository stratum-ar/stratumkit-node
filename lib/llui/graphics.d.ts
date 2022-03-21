/// <reference types="node" />
export declare class Graphics {
    private rgen;
    drawLine(sx: number, sy: number, ex: number, ey: number, r: number, g: number, b: number): void;
    toBuffer(): Buffer;
}
