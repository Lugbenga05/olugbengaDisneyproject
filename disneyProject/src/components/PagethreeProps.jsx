import './PagethreeProps.css'


function PagethreeProps(props) {
    const {newsImage, newsTitle, newsText, newsDate} = props

    return(
        <>
            <div className='pagethreeContent'>
                <img className='newsImage' src={newsImage} alt="" />
                
                <h6 className='newsTitle'>{newsTitle}</h6>

                <h4 className='newsText'>{newsText}</h4>

                <h6 className='newsDate'>{newsDate}</h6>

            </div>
        
        
        </>
    )
    
}


export default PagethreeProps