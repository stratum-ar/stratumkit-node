import { App } from "./app"
import { Graphics } from "./llui"
import { UI, UIView } from "./ui"
import { Rectangle } from "./ui/components/shapes"

const app = new App()
const ui = new UI(app)

app.onInput = (input) => {
    ui.handleInput(input)
}

app.start(process.argv[2])?.then(() => {
    console.log("Wee!")

    const mainView = ui.createView((v) => {
        v.add(new Rectangle(50, 50, 100, 30).click(() => {
            console.log("click!")
        }))
    })

    ui.navigate(mainView)

    ui.render()
})