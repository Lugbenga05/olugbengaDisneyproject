import './Header.css'


function Header () {

    return(
        <>
            <nav className="header-nav">
                <img src="./src/assets/disneyLogo.png" id="nav-logo" alt="disneyLogo" />

                <ul>
                    <li><a href="#disneyPlus" target="blank">Disney Plus</a></li>
                    <li><a href="#shopping" target="blank">Shopping</a></li>
                    <li><a href="#movie" target="blank">Movie</a></li>
                    <li><a href="#tv" target="blank">TV</a></li>
                    <li><a href="#parkResort" target="blank">Park & Resort</a></li>
                    <li><a href="#music" target="blank">Music</a></li>
                    <li><a href="#menu" target="blank">Menu</a></li>
                </ul>

                <div className="inputSearch-wrap">
                    <input type="text" id="inputSearch" placeholder='Search within the site' /> 
                    <button><img src="./src/assets/searchIconn.jpg" id="searchIcon" alt="" /></button>
                </div>

            </nav>

            <img src="./src/assets/storyOlaf.PNG" id='storyOlaf-image' alt="storrOlafimage" />
        
        
        </>
    )
    
}


export default Header