import styled from 'styled-components'

const BackgroundContainer = styled.div`
  background: red;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export default function Background() {
  return <BackgroundContainer />
}
