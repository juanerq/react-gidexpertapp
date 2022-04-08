import PropTypes from 'prop-types'

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInUp">
      <div className="container-img">
        <img src={ url } alt={ title }/>
      </div>
      <p>{ title }</p>
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
