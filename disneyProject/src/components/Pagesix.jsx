import Footer from "./Footer";
import PagesixProps from "./PagesixProps";
import Special from "./Special";


function Pagesix() {
    const pagesixData = [

        {
            characterintroImage: "./src/assets/chipDale6.jpeg",
            characterintroTitle: "chip and dale",
            characterintroText: "Cute chipmunk character. Chipm has a black nose and one tooth in the..."
        },

        {
            characterintroImage: "./src/assets/rapunzel.jpeg",
            characterintroTitle: "rapunzel",
            characterintroText: "Rapunzel, a vivacious girl with long blonde hair who lives in a high..."
        },

        {
            characterintroImage: "./src/assets/duckBunny.jpeg",
            characterintroTitle: "ducky and bunny",
            characterintroText: "A stuffed animal that was a prize for shooting at the mobile amusement..."
        },

        {
            characterintroImage: "./src/assets/rabbit.jpeg",
            characterintroTitle: "rabbit",
            characterintroText: "A rabbit who lives in the 100 Acre Wood with Pooh and his friends..."
        },

        {
            characterintroImage: "./src/assets/tonsuke.jpeg",
            characterintroTitle: "Tonsuke",
            characterintroText: `A curious rabbit who appears "Bambi" (1942. Bambi's platmate...`
        },
    ]


    return(
        <>
           <section className="pagesixBackground">
              <br /><br /><h2 className="pagesixHeading">Character introduction</h2> <br />
              <div className="pagesix-body">
                {
                    pagesixData.map(
                        (object)=>{
                            return(
                                <PagesixProps characterintroImage={object.characterintroImage}
                                characterintroTitle={object.characterintroTitle}
                                characterintroText={object.characterintroText}
                                />
                            )
                        }
                    )
                }
              </div>
              <h3 className="pagesix-link">
                <a id="link6" href="http://">Go to character list</a></h3>

                <div className="logo-wrap">
                    <img className="logos" src="./src/assets/disneyLogo.png" alt="" />

                    <img className="logos" src="./src/assets/pixarLogo.png" alt="" />

                    <img className="logos" src="./src/assets/marvelLogo.png" alt="" />

                    <img className="logos" src="./src/assets/starWarsLogo.png" alt="" />
                </div>

                <div>
                    <Special/>
                </div>

                <section>
                    <h3 id="characterTitle">character products</h3>
                    <div className="characterImage-wrap">
                        <img className="characterImage" src="./src/assets/character1.png" alt="" />

                        <img className="characterImage" src="./src/assets/character2.png" alt="" />

                        <img className="characterImage" src="./src/assets/character3.png" alt="" />

                        <img className="characterImage" src="./src/assets/character4.png" alt="" />

                        <img className="characterImage" src="./src/assets/character5.png" alt="" />

                        <img className="characterImage" src="./src/assets/character6.png" alt="" />
                    
                    </div>

                    <div className="characterImage-wrap">
                        <img className="characterImage" src="./src/assets/character7.png" alt="" />

                        <img className="characterImage" src="./src/assets/character8.png" alt="" />

                        <img className="characterImage" src="./src/assets/character9.png" alt="" />

                        <img className="characterImage" src="./src/assets/character10.png" alt="" />

                        <img className="characterImage" src="./src/assets/character11.png" alt="" />

                        <img className="characterImage" src="./src/assets/character12.png" alt="" />
                    
                    </div>

                    <div className="characterImage-wrap">
                        <img className="characterImage" src="./src/assets/character13.png" alt="" />

                        <img className="characterImage" src="./src/assets/character14.png" alt="" />

                        <img className="characterImage" src="./src/assets/character15.png" alt="" />

                        <img className="characterImage" src="./src/assets/character16.png" alt="" />

                        <img className="characterImage" src="./src/assets/character17.png" alt="" />

                        <img className="characterImage" src="./src/assets/character18.png" alt="" />
                    
                    </div>

                    <footer>
                        <Footer/>
                    </footer>
                    
                </section>


            </section>
        
        </>
    )
    
}


export default Pagesix