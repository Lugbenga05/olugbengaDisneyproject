import PagefiveProps from "./PagefiveProps";


function Pagefive() {
    const pagefiveData = [
        {
            popularcharacterImage: "./src/assets/chipDale.PNG",
            popularcharacterTitle: "Chip & Dale birthday commemorative goods",
            popularcharacterText: ""
        },

        {
            popularcharacterImage: "./src/assets/casualMickey.PNG",
            popularcharacterTitle: "Casual Mickey items",
            popularcharacterText: "URBAN RESEARCH and others"
        },

        {
            popularcharacterImage: "./src/assets/recommendedGift.PNG",
            popularcharacterTitle: "Recommended gift items for the welcome season",
            popularcharacterText: ""
        },

        {
            popularcharacterImage: "./src/assets/disneyPlastic.PNG",
            popularcharacterTitle: "Disney Plastic Gamaguchi and others",
            popularcharacterText: "Chara Marche"
        },
    ]


    return(
        <>
            <h2 className="pagefiveHeading">Goods featuring popular characters are available!</h2>
            <div className="pagefive-body">
            {
                pagefiveData.map(
                    (object)=>{
                        return(
                            <PagefiveProps popularcharacterImage={object.popularcharacterImage}
                            popularcharacterTitle={object.popularcharacterTitle}
                            popularcharacterText={object.popularcharacterText}
                            />
                        )
                    }

                )
            }
            </div>
        
        </>
    )
    
}


export default Pagefive