import './PagefourProps.css'


function PagefourProps(props) {
    const {disneyplusImage, disneyplusTitle, disneyplusText} = props

    return(
        <>
            <div className='pagefourcontent'>
                <img className='disneyplusImage' src={disneyplusImage} alt="" />
                
                <h4 className='disneyplusTitle'>{disneyplusTitle}</h4>

                <p className='disneyplusText'>{disneyplusText}</p>
            </div>
        
        
        </>
    )
    
}


export default PagefourProps