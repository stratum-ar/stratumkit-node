import { RequestGenerator } from "./request"

export class Graphics {
    private rgen = new RequestGenerator()

    public drawLine(
        sx: number, sy: number, ex: number, ey: number,
        r: number, g: number, b: number
    ) {
        this.rgen.append([16, sx, sy, ex, ey, r, g, b])
    }

    public drawEllipse(
        x: number, y: number, width: number, height: number,
        r: number, g: number, b: number
    ) {
        this.rgen.append([17, x, y, width, height, r, g, b])
    }

    public fillRect(
        x: number, y: number, width: number, height: number,
        r: number, g: number, b: number
    ) {
        this.rgen.append([18, x, y, width, height, r, g, b])
    }

    public drawQuadratic(
        sx: number, sy: number, cx: number, cy: number,
        ex: number, ey: number,
        r: number, g: number, b: number
    ) {
        this.rgen.append([18, sx, sy, cx, cy, ex, ey, r, g, b])
    }

    public toBuffer(): Buffer {
        return this.rgen.toBuffer()
    }
}