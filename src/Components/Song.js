import React from "react"

const Song = (props)=>{
    return(
        <tbody>
            <tr className="songlist">
                <th>
                    {props.song.title}
                </th>
                <th>
                    {props.song.artist}
                </th>
                <th>
                    {props.song.genre}
                </th>
                <th>
                    {props.song.rating}
                </th>

            </tr>
        </tbody>
    )

}



export default Song