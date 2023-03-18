import React from 'react'
import "../Components/style.css"



const MovieList = ({ movies }) => {
    return (
        <div>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Year</th>
                </thead>


                <td>
                    {movies.map((item,index) => {
                        return (
                            <tr key={index}>{item.title}</tr>
                        )

                    })}

                </td>
                <td>
                    {movies.map((item,index) => {
                        return (
                            <tr key={index}>{item.genre}</tr>
                        )

                    })}
                </td>
                <td>
                    {movies.map((item, index) => {
                        return (
                            <tr key={index}>{item.year}</tr>
                        )

                    })}
                </td>




            </table>
        </div>
    )
}

export default MovieList