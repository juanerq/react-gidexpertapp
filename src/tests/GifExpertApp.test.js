import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp'

describe('Component <GifExpertApp/>', () => {
    
    test('It should display GifExpertApp Item correctly', () => {
        const wrapper = shallow( <GifExpertApp/> )
        expect(wrapper).toMatchSnapshot()
    })

    test('Should display a list of category', () => {
        const categories = ['Attack on tittan', 'Demon slayer']
        const wrapper = shallow( <GifExpertApp defaultCategories={categories}/> )

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
})