import React from 'react';
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './infoComponents';
import { Button } from './buttonComponents';
const Info = ({
    lightBg, 
    id, 
    imgStart, 
    Topline, 
    lightText, 
    Headline, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark2
}) => {
    return(
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                        <TextWrapper>
                            <TopLine>{Topline}</TopLine>
                            <Heading lightText={lightText}>{Headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to="home"
                                primary={primary ? 1 : 0} 
                                dark={dark ? 1 : 0} 
                                dark2={dark2 ? 1 : 0}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                      </Column1>
                      <Column2>
                        <ImgWrap>
                          <Img draggable="false" src={img} alt={alt} />
                        </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>
        </>
    )
}

export default Info;