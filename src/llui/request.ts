import { SmartBuffer } from "smart-buffer"

export class RequestGenerator {
    private bytes = [0]

    public end() {
        if (this.bytes.length === 1) {
            this.bytes.push(2)
        } else {
            this.bytes[this.bytes.length - 1] = 2
        }
    }

    public append(data: number[]) {
        this.bytes[0] += 1

        this.bytes.push(...data, 1)
    }

    public toBuffer(): Buffer {
        this.end()

        const buffer = new SmartBuffer()
        
        this.bytes.forEach(byte => buffer.writeUInt8(byte))

        return buffer.toBuffer()
    }
}