import { Socket } from "net"
import { SmartBuffer } from "smart-buffer"

export type AppInput = {
    x: number,
    y: number
}

export class App {
    private _conn = false

    private client = new Socket()

    public onInput = (input: AppInput) => {}

    private handleData(resolve: () => void) {
        return (data: Buffer) => {
            const command = data.readUint8(0)
    
            if (command === 0x01) { // App Server confirmation
                this._conn = true
                resolve()
            } else if (command === 0x0F) { // Input
                const x = data.readUint8(1)
                const y = data.readUint8(2)

                this.onInput({x, y})
            }
        }
    }

    public get connected() {
        return this._conn
    }

    public start(appId: string): Promise<void> | null {
        if (this._conn) {
            return null
        }

        return new Promise((resolve, reject) => {
            this.client.connect(50665, "localhost", () => {
                // Reply to App Server with ID
                const buffer = new SmartBuffer()
                buffer.writeUInt8(0)
                buffer.writeString(appId)

                this.client.write(buffer.toBuffer())
            })

            this.client.on("data", (data) => this.handleData(resolve)(data))
        })
    }

    public sendCommand(id: number, data: Buffer): Promise<void> {
        const buffer = new SmartBuffer()
        buffer.writeUInt8(id)
        buffer.writeUInt16BE(data.length)
        buffer.writeBuffer(data)

        return new Promise((resolve, reject) => {
            this.client.write(buffer.toBuffer(), (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}