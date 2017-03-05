import assert from 'assert'
import Chart from './chart'
import Section from './section'
import Measure, {MEASURE_TYPE_4, MEASURE_TYPE_2_2} from './measure'
import Chord, {NOTE_C, CHORD_TYPE_SEVEN} from './chord'


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

    it('should create a measure with 1 chord', () => {
        const measure = new Measure(MEASURE_TYPE_4)
        assert(measure)
        assert(measure.type, '4')
    })

    it('should create a measure with 2 chords', () => {
        const measure = new Measure(MEASURE_TYPE_2_2)
        assert(measure.type, '2-2')
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
