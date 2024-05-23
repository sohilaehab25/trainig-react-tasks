import { useState } from "react"

const Hocks = (props) =>{


    // const {title, count} = props
    const [Count, SetCount] =useState(0)
    const [title, setTitle ] = useState("bye")
    const increase = ()=>{
        console.log("increase")
       SetCount(Count +1)
        console.log(Count)
    }
    const decrease = () =>{
        console.log("decrease")
        SetCount(Count - 1)
        console.log(Count)
    }

    const changeTitle = () =>{
        setTitle ("Welcome soso")
    }
    return(
        <div className="bg-dark text-light p-5 text-center">
        {console.log( "1-Render " )}
        <div className="container">
            <h1 className="text-warning mb-3">{title}</h1>
            <p className="lead ">Count :{Count} </p>
            {(Count < 0 ) && <p className="alert alert-danger">number is less than zero</p>}
            <div>
                <button  className="btn btn-success mx-3" onClick={increase} > +</button>
                <button  className="btn btn-danger" onClick={decrease}>-</button>
            </div>
            <button  className="btn btn-outline-primary mt-4" onClick={changeTitle}>Change Title</button>
        </div>

    </div>

        

    );
}
export default Hocks