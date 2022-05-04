import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Hook useFetchGifs', () => {
    test('Should return initial state', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Nezuko'))
        const { data, loading } = result.current

        await waitForNextUpdate

        expect(data).toEqual([])
        expect(loading).toBe(true)
    })

    test('Should return an array of img and loading en false', async () => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Nezuko'))
        const { data, loading } = result.current
        await waitForNextUpdate

        expect(data).toEqual([])
        expect(loading).toBe(true)

    })
})