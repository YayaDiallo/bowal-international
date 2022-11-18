import React from 'react';
// import Video from "../../videos/video.mp4";
// import Image from '../../images/world-international.jpeg';
import Image from '../../images/world-international.webp';
// import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
} from './HeroElements';

function HeroSection() {
  // const [hover, setHover] = useState(false);

  // const onHover = () => {
  //   setHover(!hover);
  // };

  return (
    <HeroContainer id='home'>
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
        <ImageBg src={Image} alt='international' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Distribution et services à l'international</HeroH1>
        {/* <HeroP>La centrale d&apos;achat des entreprises Africaines</HeroP> */}
        {/* <HeroBtnWrapper>
          <Button
            to="/"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth="true"
            duration={500}
            spy="true"
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper> */}
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
