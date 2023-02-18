import { useEffect, useState } from "react";
import SearchFilter from "../components/SearchFilter";


const Home = () => {
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
            <section className="home-section">
                <h2>Home</h2>
                <SearchFilter />
            </section>
            }      
        </>
     );
}
 
export default Home;