import React from 'react';
import Icon1 from '../images/icon11.svg';
import Icon2 from '../images/icon22.svg';
import Icon3 from '../images/icon33.svg';
import {
    AdvantagesContainer,
    AdvantagesH1,
    AdvantagesWrapper,
    AdvantagesCard,
    AdvantagesIcon,
    AdvantagesH2,
    AdvantagesP
} from './advantagesComponents';

const Advantages = () => {
    return(
        <AdvantagesContainer id="advantages">
          <AdvantagesH1>Our Advantages</AdvantagesH1>
          <AdvantagesWrapper>
            <AdvantagesCard>
              <AdvantagesIcon src={Icon1}/>
              <AdvantagesH2>Access to thousands of songs</AdvantagesH2>
              <AdvantagesP>We offer thousands of free songs of all genres for each moment.</AdvantagesP>
            </AdvantagesCard>
            <AdvantagesCard>
              <AdvantagesIcon src={Icon2}/>
              <AdvantagesH2>Creating playlists</AdvantagesH2>
              <AdvantagesP>In Bloom Music you can create playlists for each moment.</AdvantagesP>
            </AdvantagesCard>
            <AdvantagesCard>
              <AdvantagesIcon src={Icon3}/>
              <AdvantagesH2>Support with all languages</AdvantagesH2>
              <AdvantagesP>We have branches all over the world, so contact with users is much easier.</AdvantagesP>
            </AdvantagesCard>
          </AdvantagesWrapper>
        </AdvantagesContainer>
    )
}

export default Advantages;