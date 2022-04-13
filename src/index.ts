import { App } from "./app"
import { Graphics } from "./llui"
import { UI } from "./ui"
import { Slider } from "./ui/components/controls/slider"
import { Button } from "./ui/components/controls/button"
import { Checkbox } from "./ui/components/controls/checkbox"
import { Progress } from "./ui/components/controls/progress"
import { Label } from "./ui/components/text"
import { Alignment } from "./ui/enums/enums"

const app = new App()
const ui = new UI(app)

app.onInput = (input) => {
    ui.handleInput(input)
}

app.start(process.argv[2])?.then(() => {
    console.log("Wee!")

    const mainView = ui.createView((v) => {
        let count = 0

        const label = new Label(count.toString(), 64, 64, 40, 20, Alignment.MIDDLE)

        const decrement = new Button("-", 34, 64, 40, 20).click(() => {
            count--
            label.text = count.toString()
        })
        const increment = new Button("+", 104, 64, 40, 20).click(() => {
            count++
            label.text = count.toString()
        })

        v.add(new Checkbox(false, "Hello", 16, 100, 100, 16))

        v.add(new Progress(0.3, 16, 130, 120, 16))
        v.add(new Progress(0.7, 16, 150, 120, 16))

        v.add(new Slider(0.5, 16, 170, 120, 16))
        v.add(new Slider(0.5, 180, 16, 16, 120, true))

        v.add(label, decrement, increment)
    })

    ui.navigate(mainView)

    const gfx = new Graphics()

    gfx.drawCheckBox(16, 16, false)
    gfx.drawCheckBox(48, 16, true)

    app.sendCommand(0x10, gfx.toBuffer())

    ui.render()
})