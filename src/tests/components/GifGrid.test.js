import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')


describe('Component <GifGrid/>', () => {
  const category = 'Demon Slayer'

  test('It should display GifGrid correctly', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })

    const wrapper = shallow( <GifGrid category={ category } /> )
    expect( wrapper ).toMatchSnapshot()

  })

  test('Should display items when images are loaded', () => {

    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/cualquier/cosa',
      title: 'Cualquier cosa'
    }]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })

    const wrapper = shallow( <GifGrid category={ category } /> )
    
    expect( wrapper.find('p').exists() ).toBe( false )
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
    expect( wrapper ).toMatchSnapshot()

  })

})