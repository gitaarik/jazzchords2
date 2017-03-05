import assert from 'assert'
import {Chart, Section, Measure, Chord} from './chart'
import {NOTE_C, CHORD_TYPE_SEVEN} from './constants'


describe('Chart', () => {

	it('should create a Chart instance', () => {
        const chart = new Chart('All of me')
		assert(chart)
		assert.equal(chart.title, 'All of me')
	})

    it('should create a section', () => {
        const section = new Section()
        assert(section)
    })

	it('should add a section', () => {

        const chart = new Chart('All of me')
        const section = new Section()

        chart.addSection(section)

		assert.equal(chart.sections.length, 1)
		assert.equal(chart.sections[0], section)

	})

    it('should create a measure', () => {
        const measure = new Measure()
        assert(measure)
    })

    it('should add a measure', () => {

        const section = new Section()
        const measure = new Measure()

        section.addMeasure(measure)

        assert.equal(section.measures.length, 1)
        assert.equal(section.measures[0], measure)

    })

    it('should create a chord', () => {

        const chord = new Chord(NOTE_C, CHORD_TYPE_SEVEN)

        assert(chord)
        assert.equal(chord.note, 'C')
        assert.equal(chord.type, '7')

    })

    it('should add a chord', () => {

        const measure = new Measure()
        const chord = new Chord()

        measure.setChords([chord])

    })

})
