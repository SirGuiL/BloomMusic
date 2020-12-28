import React, { useState } from 'react';
import { Button2 } from './buttonComponents';
import { 
    HomeContainer, 
    HomeBg, 
    ImgBg,
    HomeContent,
    HomeH1,
    HomeP,
    HomeBtnWrapper,
    ArrowRight 
} from './homeComponents';

const Home = () => {
    const [hover, setHover] = useState(false);
    
    const onHover = () => {
        setHover(!hover);
    }

    return(
        <HomeContainer>
            <HomeBg>
                <ImgBg src="./background3.jpg"/>
            </HomeBg>
            <HomeContent>
                <HomeH1>Bloom Music™</HomeH1>
                <HomeP>
                    Sign up for a new account today and receive two months free.
                </HomeP>
                <HomeBtnWrapper>
                    <Button2 to="/signin" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary={true} dark={true}>
                        Get started <ArrowRight/>
                    </Button2>
                </HomeBtnWrapper>
            </HomeContent>
        </HomeContainer>
    );
}

export default Home;