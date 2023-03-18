import React from 'react'
import "./style.css"

const GenreFilter = ({ genres }) => {
    // console.log(genres);

    return (
        <div className='filter-box'>
            <h2>Filter by Genre</h2>
            <div className='btn'>
                {genres.map((element, index) => {
                    return (
                        <button onClick={() => console.log(`filtering by ${element}`)} key={index} >
                            {element}
                        </button>)
                })}
            </div>


        </div>
    )
}

export default GenreFilter