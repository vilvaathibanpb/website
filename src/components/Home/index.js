import React from 'react';
import imageLight from '../../assets/light/i1.png'
import imageDark from '../../assets/dark/i1.png'
import Button from '../Button';

const Home = ({theme}) => {
    const navigateToForm = () => {
        document.getElementById('contact_form').scrollIntoView();
    }
    return (
        <div className="flex xl:pl-12 lg:pl-12 items-center flex-col lg:flex-row  box-border">
            <div className="w-full  xl:w-2/5 lg:w-2/5 mt-16 lg:mt-0 xl:pr-20 lg:pr-20 pl-4 pr-4  box-border">
                <div className="text-6xl font-bold text-primary leading-none">We love️ building digital products</div>
                <div className="text-xl text-primary mt-4">Bringing ideas to market faster and better. Got an idea?</div>
                <Button title="Let's Collabrate" onClick={navigateToForm}></Button>
            </div>
            <div className="h-auto lg:max-h-screen lg:h-screen lg:w-3/5 w-full ">
                <img className="lg:max-h-screen lg:h-screen w-full hidden lg:block" src={theme === "light" ? imageLight : imageDark} alt="Build awesome tech products" style={{marginTop:"-5.5rem", marginRight: "-2.5rem", objectFit: "cover"}} />
                <img className="lg:max-h-screen lg:h-screen w-full block lg:hidden" src={theme === "light" ? imageLight : imageDark} alt="Build awesome tech products" style={{ objectFit: "cover"}} />
            </div>
        </div>
    )
}

export default Home;