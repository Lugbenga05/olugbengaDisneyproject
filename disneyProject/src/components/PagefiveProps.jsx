import './PagefiveProps.css'


function  PagefiveProps (props) {
    const {popularcharacterImage, popularcharacterTitle, popularcharacterText} = props

    return(
        <>
            <div className='pagefiveContent'>
                <img className='popularcharacterImage' src={popularcharacterImage} alt="" />

                <h4 className='popularcharacterTitle'>{popularcharacterTitle}</h4>

                <h6 className='popularcharacterText'>{popularcharacterText}</h6>
            </div>
        
        </>
    )
    
}


export default PagefiveProps