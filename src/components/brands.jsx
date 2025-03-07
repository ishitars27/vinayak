// brands.jsx
import '../styles/brands.css';

const Brands = () => {
    return (
        <div id='brandsmain'>
            <h1>Brands with us</h1>
            <div className='brandscontainer' id='brandscontainer' style={{
                backgroundImage: `url("/ridinggears.png")`,
                backgroundSize: "cover",
                borderTop: "2px solid black"
            }}>
                <div className="cards">
                    <div className='brand-card'>
                        <a href="https://www.royalenfield.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/royalenfield.png" alt="RE" />
                            <h5>Royal Enfield</h5>
                        </a>
                    </div>
                </div>
                <div className="cards">
                    <div className='brand-card'>
                        <a href="https://cramster.in/" target="_blank" rel="noopener noreferrer">
                            <img src="/cramster.png" alt="cramster" />
                            <h5>Cramster</h5>
                        </a>
                    </div>
                </div>
                <div className="cards">
                    <div className='brand-card'>
                        <a href="https://planetdsg.com/?srsltid=AfmBOoqPf4la4aeV5mXNTAeK0sUxwztYiHDxeUewsscTHJQBgMJs_B4V" target="_blank" rel="noopener noreferrer">
                            <img src="/DSG.png" alt="DSG" />
                            <h5>DSG</h5>
                        </a>
                    </div>
                </div>
                <div className="cards">
                    <div className='brand-card'>
                        <a href="https://spartanprogear.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/spartan.png" alt="spartan" />
                            <h5>Spartan</h5>
                        </a>
                    </div>
                </div>
                <div className="cards">
                    <div className='brand-card'>
                        <a href="https://axorhelmets.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/axor.png" alt="axor" />
                            <h5>Axor</h5>
                        </a>
                    </div>
                </div>
                <div className="cards">
                    <div className='brand-card'>
                        <a href="https://vegaauto.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/vega.png" alt="vega" />
                            <h5>Vega</h5>
                        </a>
                    </div>
                </div>
                <div className="cards">
                    <div className='brand-card'>
                        <a href="https://steelbirdhelmet.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/sb.png" alt="sb" />
                            <h5>SteelBird</h5>
                        </a>
                    </div>
                </div>
                <div className="cards">
                    <div className='brand-card'>
                        <a href="https://solacegears.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/solace.png" alt="solace" />
                            <h5>Solace</h5>
                        </a>
                    </div>
                </div>
                <div className='cards'>
                    <div className='brand-card'>
                        <a href="https://rynoxgears.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/rynox.png" alt="rynox" />
                            <h5>Rynox</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;