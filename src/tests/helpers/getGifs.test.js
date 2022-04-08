import getGifs from '../../helpers/getGifs' 

describe('Helper getGifs', () => {
  test('Should return 10 Gifs', async () => {

    const gifs = await getGifs('Attack on titan')
    expect( gifs.length ).toBe( 10 )

  })

  test('Should retunr an empty array', async () => {

    const gifs = await getGifs('')
    expect( gifs.length ).toBe( 0 )

  })
})