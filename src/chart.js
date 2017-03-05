export default class Chart {

    sections = []

    constructor (title) {
        this.title = title
    }

    addSection (section) {
        this.sections.push(section)
    }

}
