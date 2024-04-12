import PagethreeProps from "./PagethreeProps"


function Pagethree() {
    const pagethreeData = [
        {
            newsImage: "./src/assets/disneyChannel.jpeg",
            newsTitle: "NEWS",
            newsText: `Movies that you can't miss are coming out one after another! Delivering mind-blowing entertainment on Disney Channel!​​`,
            newsDate: "March 25, 2024"
        },

        {
            newsImage: "./src/assets/littleDoll.png",
            newsTitle: "NEWS",
            newsText: `“Disney My Little Doll” A garden of happiness full of blooming white clover♪​​`,
            newsDate: "March 25, 2024"
        },

        {
            newsImage: "./src/assets/winniePooh.jpeg",
            newsTitle: "NEWS",
            newsText: `Disney “Winnie the Pooh” Ohisama Market <Held in Ibaraki/Mito from 3/28>​​`,
            newsDate: "March 25, 2024"
        },

        {
            newsImage: "./src/assets/thePrincess.jpeg",
            newsTitle: "NEWS",
            newsText: `The Disney movie “The Princess and the Frog”, full of wonderful music and magic, will be broadcast on Disney Channel from 20:00 on Saturday, April 6th!​​`,
            newsDate: "March 25, 2024"
        },
    ]

    return(
        <>
            <h2 className="pagethreeHeading">news</h2>
            <div className="pagethree-body">
                {
                    pagethreeData.map(
                        (object)=>{
                            return(
                                <PagethreeProps newsImage={object.newsImage}
                                newsTitle={object.newsTitle}
                                newsText={object.newsText}
                                newsDate={object.newsDate}
                                />
                            )
                        }
                    )

                }
            </div>

            <h3 className="pagethree-link">
            <a id="link3" href="http://">Go to news list</a>
            </h3>

        
        
        </>
    )
    
}


export default Pagethree