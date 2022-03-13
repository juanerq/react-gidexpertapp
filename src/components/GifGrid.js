import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs( category )

  return (
    <>
      <h3 className='animate__animated animate__fadeInDown'>{ category }</h3>
      { loading && <p className='animate__animated animate__fadeInDown'>Loading</p> } 
      <div className='container-cards'>
          {
            images.map(img => (
              <GifGridItem key={img.id} {...img} />
            ))
          }
      </div> 
    </>
  )
}
