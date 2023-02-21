import data from "../data/bios"

const Team = () => {
    return ( 
        <section className="team-section">
            <h2>Our Team</h2>
            <div className="cards-container">
            {data.map((item) => (
                <article className="bio-card">
                    <img src={item.pictureURL} alt={item.name} className="bio"/>
                    <h3>{item.name}</h3>
                    <a href={item.website} target="_blank" rel="noreferrer" className="bio">{item.website}</a>
                    <p className="bio">{item.bio}</p>
                </article>
            ))}
            </div>

        </section>
     );
}
 
export default Team;