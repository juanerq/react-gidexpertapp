import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from "../hooks/useFetchGifs"
import PropTypes from 'prop-types'

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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}