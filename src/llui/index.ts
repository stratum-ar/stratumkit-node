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
        this.rgen.append([20, sx, sy, cx, cy, ex, ey, r, g, b])
    }

    public drawIcon(
        x: number, y: number, iconNo: number,
        r: number, g: number, b: number
    ) {
        this.rgen.append([22, x, y, iconNo, r, g, b])
    }

    public drawPolygon(
        xs: number[], ys: number[],
        r: number, g: number, b: number
    ) {
        let arr = new Array(2 * xs.length + 5)
        arr[0] = 23
        arr[1] = xs.length

        for (let i = 2; i < 2 * xs.length + 2; i++ )
            arr[i] = i % 2 == 0 ? xs[(i - 2) / 2] : ys[(i - 2) / 2];

        arr[arr.length - 3] = r;
        arr[arr.length - 2] = g;
        arr[arr.length - 1] = b;

        this.rgen.append(arr)
    }

    public drawText(
        x: number, y: number, text: string,
        r: number, g: number, b: number
    ) {
        let arr = [30, x, y, text.length]
        arr = this.addTextToArray(text, arr)
        arr.push(r, g, b)

        this.rgen.append(arr)
    }

    public drawAlignedText(
        x: number, y: number, width: number, height: number, 
        alignment: Alignment, text: string,
        r: number, g: number, b: number
    ) {
        let arr = [32, x, y, width, height, alignment, text.length]
        arr = this.addTextToArray(text, arr)
        arr.push(r, g, b)

        this.rgen.append(arr)
    }

    public drawButton(
        x: number, y: number, width: number, height: number, 
        buttonState: ButtonState, text: string, iconNo: number | null,
        r: number, g: number, b: number
    ) {
        let arr = [33, x, y, width, height, buttonState, text.length]
        arr = this.addTextToArray(text, arr)
        arr.push(iconNo == null? 0 : iconNo, r, g, b)

        this.rgen.append(arr)
    }

    public drawComboBox(
        x: number, y: number, width: number, height: number, 
        buttonState: ButtonState, text: string,
    ) {
        let arr = [34, x, y, width, height, buttonState, text.length]
        arr = this.addTextToArray(text, arr)

        this.rgen.append(arr)
    }

    public drawCheckBox(
        x: number, y: number, width: number, height: number, isChecked: boolean
    ) {
        this.rgen.append([35, x, y, width, height, isChecked ? 1 : 0])
    }

    public drawSlider(
        x: number, y: number, width: number, height: number, 
        fillPercentage: number, vertical: boolean
    ) {
        this.rgen.append([37, x, y, width, height, fillPercentage * 255, vertical ? 1 : 0])
    }

    public drawProgress(
        x: number, y: number, width: number, height: number, progress: number
    ) {
        this.rgen.append([38, x, y, width, height, progress * 255])
    }

    public drawEditBox(
        x: number, y: number, width: number, height: number,
        editBoxState: EditBoxState, text: string, isSelected: boolean,
        selStart?: number, selEnd?: number
    ) {
        let arr = [39, x, y, width, height, editBoxState, text.length]
        arr = this.addTextToArray(text, arr)

        if (isSelected == true && selStart != null && selEnd != null)
            arr.push(1, selStart, selEnd)
        else
            arr.push(0)

        this.rgen.append(arr)
    }

    public drawPager(
        x: number, y: number, width: number, height: number,
        noOfItems: number, selectedIndex: number, vertical: boolean
    ) {
        this.rgen.append([39, x, y, width, height, noOfItems,selectedIndex, vertical ? 1 : 0])
    }

    public toBuffer(): Buffer {
        return this.rgen.toBuffer()
    }

    public addTextToArray(
        text: string, arr: number[]
    ) {
        for(let i = 0; i < text.length; i++) {
            let char = text.charCodeAt(i)
            arr.push(char >>> 8)
            arr.push(char & 0xFF)
        }
        return arr
    }
}