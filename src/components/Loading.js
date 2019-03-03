import React from 'react'
import styled from 'styled-components'

const LoadingContainer = styled.div`
    margin: 0;
    padding: 16px;
`

const LoadingItem = styled.p`
    color: orange;
    font-size: 16px;
`

const Loading = () => (
    <LoadingContainer>
        <LoadingItem>Loading Games...</LoadingItem>
    </LoadingContainer>
)

export default Loading

