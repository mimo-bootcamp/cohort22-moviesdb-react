import { useEffect, useState } from "react";

const MovieDetails = () => {
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        try{

        } catch(error){
            console.log(error)
        }
        setLoading(false);
    },[])

    return ( 
        <>
            { loading && <section className="loader-section">hello</section> }
            { !loading && 
            <section className="moviedetails-section">
                <h2>Movie Details</h2>
            </section>
            }
        </>
     );
}
 
export default MovieDetails;
