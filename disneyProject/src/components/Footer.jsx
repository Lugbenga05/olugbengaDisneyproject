import './Footer.css'


function Footer() {
    return(
        <>
            <footer>
                <div id="social-wrap">
                    <a href=""><img src="./src/assets/socialInstagram.svg" alt="" /></a>

                    <a href=""><img style={{width: "30px"}} src="./src/assets/socialX.svg" alt="" /></a>

                    <a href=""><img src="./src/assets/socialFacebook.svg" alt="" /></a>

                    <a href=""><img src="./src/assets/socialYoutube.svg" alt="" /></a>

                    <a style={{marginTop: "10px"}} href="">Go to SNS list</a>
                </div>

                <h5 id='footerTitle'>disney account</h5>

                <div className="footerText-container">
                    <div className="footerInnertext-wrap">

                        <h5 className="innerText-one">disney store club</h5>

                        <h6 className="innerText-two">Online Help (Frequently Asked Questions)</h6>

                        <h6 className="innerText-three">Disney sites around the world</h6>

                        <h6 className="innerText-four">terms of service</h6>

                    </div>

                    <div className="footerInnertext-wrap">

                        <h5 className="innerText-one">disney card club</h5>

                        <h6 className="innerText-two">Contact information</h6>

                        <h6 className="innerText-three">Social Responsibility</h6>

                        <h6 className="innerText-four">Copyright/Trademark</h6>

                    </div>

                    <div className="footerInnertext-wrap">

                        <h5 className="innerText-one">MovieNEX CLUB</h5>

                        <h6 className="innerText-two">Company information</h6>

                        <h6 className="innerText-three">privacy policy</h6>

                        <h6 className="innerText-four">(Note) Regarding product listings of linked shops</h6>

                    </div>

                    <div className="footerInnertext-wrap">

                        <h5 className="innerText-one">fantastic disney</h5>

                        <h6 className="innerText-two">Recruitment information</h6>

                        <h6 className="innerText-three">Privacy policy supplement</h6>

                    </div>

                </div>

                <h6 id="copy-right">© Disney</h6> <br /> <br />
            </footer>
        
        </>
    )
    
}


export default Footer