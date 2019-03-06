import React from 'react'
import styled from 'styled-components'
import LoadingIcon from '../img/loading.svg'

const LoadingContainer = styled.div`
    margin: 0;
    padding: 16px;
    display: flex;
    justify-content: center;
    height: 75vh;
    align-items: center;
    transition: 0.2s ease;
`

const LoadingItem = styled.img`
    height: 70px;
    width: 70px;
`

const Loading = () => (
    <LoadingContainer>
        <LoadingItem src={LoadingIcon} />
    </LoadingContainer>
)

export default Loading



