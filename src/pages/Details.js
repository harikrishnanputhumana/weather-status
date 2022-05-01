import React  from 'react'
import './Details.css'

function Details() {
    
   
    const findout = async (e) => {
        e.preventDefault()
        // await axios.get(`${baseUrl}=${API_KEY}&query=${value}`).then((res=>{
        //     // console.log(res);
        //     setSearchValue(res)
        // }))

    }

    return (
        <div className='homebody'>


            <div className="nav1">

                <h1>Weather Live</h1>

            </div>

            <div className="nav2">
                <input type="text" id='input' placeholder='Location' />
                <br />
                <br />
                <button className='btn' onClick={findout}>Search</button>

            </div>

            <footer className='footer'>
                <h5>footer</h5>
            </footer>


        </div>
    )
}

export default Details