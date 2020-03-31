import styled from 'styled-components'

export const ThemeWrapper = styled.div`
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.baseFontSize};
    color: ${props => props.theme.colors.primary};
`
