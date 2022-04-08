import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory'

describe('Component <AddCategory/>', () => {
  const setCategories = jest.fn()
  let wrapper = shallow( <AddCategory setCategory={ setCategories }/> )

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow( <AddCategory setCategory={ setCategories }/> )
  })

  test('It should display AddCategory Item correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should change the text box', () => {

    const value = 'Todo bien'

    const input = wrapper.find('input')
    input.simulate('change', { target: { value } })

    expect( wrapper.find('p').text() ).toBe( value )

  })

  test('Should not post the information with submit', () => {

    wrapper.find('form').simulate('submit', { preventDefault(){} } )
    expect( setCategories ).not.toHaveBeenCalled()

  })

  test('Should call setcategories and clear the input', () => {

    const value = 'Todo bien' 

    const input = wrapper.find('input')
    input.simulate('change', { target: { value } })

    expect( wrapper.find('p').text() ).toBe( value )

    wrapper.find('form').simulate('submit', { preventDefault(){} })

    expect( setCategories ).toHaveBeenCalledTimes(1)
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) )

    expect( input.prop('value').length ).toBe( 0 )

  })

})