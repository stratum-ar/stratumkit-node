import { App } from "./app"
import { Graphics } from "./llui"
import { UI, UIView } from "./ui"
import { Button, Checkbox, ComboBox, EditBox, Pager, Progress, Rectangle, Slider } from "./ui/components/shapes"

const app = new App()
const ui = new UI(app)

app.onInput = (input) => {
    ui.handleInput(input)
}

app.start(process.argv[2])?.then(() => {
    console.log("Wee!")

    const mainView = ui.createView((v) => {
        v.add(new Rectangle(16, 32, 60, 20).click(() => {
            console.log("Rectangle click!")
        }))
        v.add(new Button(80, 32, 60, 20).click(() => {
            console.log("Button click!")
        }))
        v.add(new Checkbox(16, 16, 10, 10).click(() => {
            console.log("Checkbox click!")
        }))
        v.add(new ComboBox(16, 102, 100, 20).click(() => {
            console.log("ComboBox click!")
        }))
        v.add(new Slider(136, 54, 16, 48).click(() => {
            console.log("Slider click!")
        }))
        v.add(new Progress(16, 196, 208, 8).click(() => {
            console.log("Progress click!")
        }))
        v.add(new EditBox(16, 148, 60, 20).click(() => {
            console.log("EditBox click!")
        }))
        v.add(new Pager(16, 208, 208, 16).click(() => {
            console.log("Pager click!")
        }))
    })

    ui.navigate(mainView)

    ui.render()
})