import './SpecialProps.css'


function SpecialProps(props) {
    const {specialImage} = props
    
    return(
        <>
            <div>
                <img id='specialImage' src={specialImage} alt="" />
            </div>
        
        </>
    )
}


export default SpecialProps