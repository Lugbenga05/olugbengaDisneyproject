import Pagetwoprops from "./PagetwoProps"


function Pagetwo () {
    const pagetwoData = [
        {
            pagetwoImage: "./src/assets/pixarBest.PNG",
            pagetwoTitle: `"Pixar Best"`,
            pagetwoText: "The ultimate best album of Pixar music! CD release/digital distribution on March 20th"
        },

        {
            pagetwoImage: "./src/assets/classicQueen.PNG",
            pagetwoTitle: "Held nationwide from May to June!",
            pagetwoText: `​"Disney on Classic ~ Gift of Dreams and Magic 2024" Orchestral performance of many popular works​`
        },

        {
            pagetwoImage: "./src/assets/minnieMouse.PNG",
            pagetwoTitle: "Focus on Minnie in March",
            pagetwoText: "Enjoy spring while being inspired by the fashionable, fun-loving, and always positive Minnie Mouse!​​"
        },

        {
            pagetwoImage: "./src/assets/donaldQuacky.PNG",
            pagetwoTitle: "disney palpalooza",
            pagetwoText: `​Tokyo Disneyland “Disney Palpalooza” 2nd “Donald’s Quacky Duck City” held​`
        },

    ]


    return(
        <>
            

            <div className="pagetwo-body">
                {
                    pagetwoData.map(
                        (object, index)=>{
                            return(
                                <Pagetwoprops pagetwoImage={object.pagetwoImage}
                                pagetwoTitle={object.pagetwoTitle}
                                pagetwoText={object.pagetwoText}
                                />
                            )
                        }
                    )
                }

            </div>
                
        
        </>
    )
    
}


export default Pagetwo