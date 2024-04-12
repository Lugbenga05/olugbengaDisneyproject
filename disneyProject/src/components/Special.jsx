import SpecialProps from "./SpecialProps"



function Special() {
    const specialData = [
        {
            specialImage: "./src/assets/disneyjp.png"
        },

        {
            specialImage: "./src/assets/disneyjp2.png"
        },

        {
            specialImage: "./src/assets/disneyjp3.png"
        },

        {
            specialImage: "./src/assets/disneyjp4.jpg"
        },

        {
            specialImage: "./src/assets/disneyjp5.jpg"
        },
    ]

    return(
        <>
            <h3 id="special">Special</h3>
            <div className="specialData">
                {
                    specialData.map(
                        (object)=>{
                            return(
                                <SpecialProps specialImage={object.specialImage}/>
                            )
                        }
                    )
                }
            </div>

        
        </>
    )
    
}

export default Special