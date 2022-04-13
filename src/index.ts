import { App } from "./app"
import { Graphics } from "./llui"
import { UI } from "./ui"
import { Slider } from "./ui/components/controls/slider"
import { Button } from "./ui/components/controls/button"
import { Checkbox } from "./ui/components/controls/checkbox"
import { Progress } from "./ui/components/controls/progress"
import { Label } from "./ui/components/text"
import { Alignment } from "./ui/enums/enums"
import { Pager } from "./ui/components/controls/pager"
import { ComboBox } from "./ui/components/controls/combobox"

const app = new App()
const ui = new UI(app)

app.onInput = (input) => {
    ui.handleInput(input)
}

app.start(process.argv[2])?.then(() => {
    const subView = ui.createPaginatedView((v) => {
        v.addPage()
        v.addPage()

        v.addTo(
            0,
            new Button("Hi!", 16, 16, 60, 24).click(() => v.ui.back())
        )
        v.addTo(
            1,
            new Slider(0.4, 16, 16, 100, 16),
            new Label("Page 2!!!", 16, 40, 100, 16)
        )
    })

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

        v.add(new Button("Sub", 16, 16, 50, 24).click(() => v.ui.navigate(subView)))

        v.add(new ComboBox(
            Array(26).fill(0).map((_, i) => `Option ${i}`),
            0,
            70, 16, 100, 24
        ))

        v.add(new Checkbox(false, "Hello", 16, 100, 100, 16))

        v.add(new Progress(0.3, 16, 130, 120, 16))
        v.add(new Progress(0.7, 16, 150, 120, 16))

        v.add(new Slider(0.5, 16, 170, 120, 16))
        v.add(new Slider(0.5, 180, 16, 16, 120, true))

        v.add(new Pager(6, 2, 0, 210, 240, 16))
        v.add(new Pager(6, 2, 210, 0, 16, 240, true))

        v.add(label, decrement, increment)
    })

    ui.navigate(mainView)

    const gfx = new Graphics()

    gfx.drawCheckBox(16, 16, false)
    gfx.drawCheckBox(48, 16, true)

    app.sendCommand(0x10, gfx.toBuffer())

    ui.render()
})