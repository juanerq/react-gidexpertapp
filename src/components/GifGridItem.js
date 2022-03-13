export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInUp">
      <div className="container-img">
        <img src={ url } alt={ title }/>
      </div>
      <p>{ title }</p>
    </div>
  )
}
