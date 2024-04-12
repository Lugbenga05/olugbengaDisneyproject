import './PagetwoProps.css'


function Pagetwoprops(props) {
    const {pagetwoImage, pagetwoTitle, pagetwoText} = props
    return(
        <>
            <div className='pagetwoContent-one'>
                <img className="pagetwoImage" src={pagetwoImage} alt="pagetwoImage" />

                <h4 className="pagetwoTitle">{pagetwoTitle}</h4>

                <p className="pagetwoText">{pagetwoText}</p>

            </div>

        
        </>
    )
    
}


export default Pagetwoprops