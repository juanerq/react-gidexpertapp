import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Component <GifGridItem/>', () => {
  const title = 'Nezuko'
  const url = 'http.//localhost:10101/nezuko.jpg'

  const wrapper = shallow( <GifGridItem title={ title } url={ url } /> )

  test('It should display Gif Grid Item correctly', () => {

    expect( wrapper ).toMatchSnapshot()

  })

  test('It should have the title Nezuko', () => {

    const p = wrapper.find('p')

    expect( p.text().trim() ).toBe( title )
  })

  test('It should have the image with url and alt', () => {

    const img = wrapper.find('img')

    expect( img.prop('src') ).toBe( url )
    expect( img.prop('alt') ).toBe( title )
  })

  test('It Should have the class animate__fadeInUp', () => {

    const div = wrapper.find('.animate__fadeInUp')
    const className = div.prop('className')
    expect( className.includes('animate__fadeInUp') ).toBe( true )

  })

})