import { useState } from "react"
import AddCategory from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

const GifExpertApp = props => {

  const [categories, setCategory] = useState(['Dragon Ball'])


  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategory={ setCategory } />
      {/* <button onClick={ handleAdd }>Add Category</button> */}
      <hr />
      <ol>
        {
          categories.map(category => (
            <GifGrid 
              key={ category } 
              category={ category }
            />
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp