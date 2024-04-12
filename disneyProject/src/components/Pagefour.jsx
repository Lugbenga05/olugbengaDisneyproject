import PagefourProps from "./PagefourProps"


function Pagefour() {
    const pagefourData = [
        {
            disneyplusImage: "./src/assets/disneyPlus.PNG",
            disneyplusTitle: `This month's recommended works`,
            disneyplusText: "Introducing the distribution schedule of Disney Plus works. New movies and original works are appearing one after another!"
        },

        {
            disneyplusImage: "./src/assets/starWars.PNG",
            disneyplusTitle: "final season",
            disneyplusText: `“Star Wars: The Bad Batch” Season 3 is now available exclusively. The story is finally coming to an end!`
        },

        {
            disneyplusImage: "./src/assets/iwaju.PNG",
            disneyplusTitle: "original series",
            disneyplusText: "All 6 episodes of “Iwaju” are now available exclusively! A science fiction animation set in Lagos, Nigeria in the near future."
        },

        {
            disneyplusImage: "./src/assets/disneyPlus2.PNG",
            disneyplusTitle: "disney plus",
            disneyplusText: "Disney's official video distribution service. In addition to masterpieces and popular works, you can also enjoy unlimited viewing of foreign dramas and Japanese content."
        },
    ]


    return(
        <>
            <section className="pagefour-background">
               <br /><br /> <h2 className="pagefourHeading">Disney Plus recommended information</h2> <br /><br />
                <div className="pagefour-body">
                    {
                        pagefourData.map(
                            (object)=>{
                                return(
                                    <PagefourProps disneyplusImage={object.disneyplusImage}
                                    disneyplusTitle={object.disneyplusTitle}
                                    disneyplusText={object.disneyplusText}
                                    />
                                )
                            }
                        )
                    }
                </div>
            </section>

        
        </>
    )
    
}


export default Pagefour