import styled from 'styled-components'

interface ContainerProps {
  readonly backgroundUrl?: string
}

const ContainerWrapper = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) =>
    props.backgroundUrl ? 'url(' + props.backgroundUrl + ')' : 'red'};
  background-size: cover;
`

export default function Container() {
  return <ContainerWrapper />
}
