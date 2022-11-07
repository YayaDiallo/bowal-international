import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoMail, IoLocation } from 'react-icons/io5';
import { HiPhone } from 'react-icons/hi';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImgWrap,
  Img,
  ContactInfo,
  ContactChannel,
  LinkAction,
  ListWrapper,
  ListChild,
} from './InfoElements';

function InfoSection({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  img,
  alt,
  descriptionLists,
}) {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              {descriptionLists ? (
                <ListWrapper>
                  {descriptionLists.map((item, index) => (
                    <ListChild key={index}>{item}</ListChild>
                  ))}
                </ListWrapper>
              ) : (
                <SubTitle darkText={darkText}>{description}</SubTitle>
              )}
              {id === 'contact' && (
                <ContactInfo darkText={true}>
                  <ContactChannel darkText={true}>
                    <HiPhone size={24} />{' '}
                    <LinkAction darkText={true} href='tel:+33768672197'>
                      + 33 7 68 67 21 97
                    </LinkAction>
                  </ContactChannel>
                  <ContactChannel darkText={true}>
                    <IoLogoWhatsapp size={24} />
                    <LinkAction
                      darkText={true}
                      href='https://api.whatsapp.com/send?phone=33768672197'
                    >
                      + 33 7 68 67 21 97
                    </LinkAction>
                  </ContactChannel>
                  <ContactChannel darkText={true}>
                    <IoMail size={24} />
                    <LinkAction
                      darkText={true}
                      href='mailto:contact@bowal-international.com'
                    >
                      contact@bowal-international.com
                    </LinkAction>
                  </ContactChannel>
                  <ContactChannel darkText={true}>
                    <IoLocation size={24} /> Paris, France
                  </ContactChannel>
                  <ContactChannel darkText={true}>
                    <IoLocation size={24} /> Mermoz, Dakar
                  </ContactChannel>
                </ContactInfo>
              )}
              {/* <BtnWrap>
                <Button
                  to="/"
                  smooth="true"
                  duration={500}
                  exact="true"
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >
                  {buttonLabel}
                </Button>
              </BtnWrap> */}
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
}

export default InfoSection;
