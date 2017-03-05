export class Chart {

    sections = []

    constructor (title) {
        this.title = title
    }

    addSection (section) {
        this.sections.push(section)
    }

}


export class Section {

    measures = []

    addMeasure (measure) {
        this.measures.push(measure)
    }

}


export class Measure {

    setChords (chords) {
        this.chords = chords
    }

}


export class Chord {

    constructor (note, type) {
        this.note = note
        this.type = type
    }

}
