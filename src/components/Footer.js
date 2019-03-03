import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    text-align: center;
`

const FooterTxt = styled.p`
    color: grey;
`

const Footer = () => (
    <FooterContainer>
        <FooterTxt>Created by Steve in Chicago, IL 2019</FooterTxt>
    </FooterContainer>
)

export default Footer

