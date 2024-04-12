import './PagesixProps.css'


function PagesixProps(props) {
    const {characterintroImage, characterintroTitle, characterintroText} = props

    return(
        <>
            <div className="pagesixContent">
                <img className="characterintroImage" src={characterintroImage} alt="" />

                <p className="characterintroTitle">{characterintroTitle}</p>

                <p className="characterintroText">{characterintroText}</p>
            </div>
        </>
    )
    
}


export default PagesixProps