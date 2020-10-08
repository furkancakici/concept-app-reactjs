/* eslint-disable react/jsx-no-undef */
import React, { FC } from 'react'
import { InfoColumn, InfoRow, InfoSec, TextWrapper, TopLine, Heading, SubTitle, ImgWrapper, Img } from './styles'
import { Button, Container } from '../../styles/globalStyles'
import { Link } from 'react-router-dom'


type InfoSec = {
    lightBg?: boolean,
    imgStart?: boolean,
    lightTopLine?: boolean,
    lightText?: boolean,
    lightTextDesc?: boolean,
    primary?: boolean,
    buttonLabel?: string,
    headLine?: string,
    topLine?: string,
    description?: string,
    start: boolean,
    img: string,
    alt: string
}


const InfoSection: FC<InfoSec> = ({ primary, lightBg, imgStart, lightText, lightTextDesc, lightTopLine, buttonLabel, headLine, topLine, description, start, img, alt }) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                                <Link to="/sign-up">
                                    <Button big fontBig primary={primary}>{buttonLabel}</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
