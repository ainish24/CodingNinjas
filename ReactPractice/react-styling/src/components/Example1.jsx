import styled from 'styled-components'

const Container=styled.div`
  background-color:#eee;
  padding: 1em;
  border-radius:1em;
  border:1px solid #eee;
  text-align:center;
`

const MainHeader=styled.h1`
  background-color:black;
  font-size:4em;
  color:white;
`

const SecondaryHeader=styled.h2`
  border:1px solid #bbb;
  font-size:2em;
  background-color:lightcoral;
`

const Description= styled.p`
  background-color:#bbb;
  padding:1em;
  border-radius:0.5em;
  border:0.2em solid white;
`


const Example1 = () => {
  return (
    <Container>
      <MainHeader>Animals</MainHeader>
      <SecondaryHeader>Wild Animals</SecondaryHeader>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi
        dicta explicabo, ipsam illum, inventore soluta eveniet possimus beatae
        veritatis voluptatum deleniti. Magnam dolore tenetur repellendus
        pariatur maiores modi facilis?
      </Description>
      <SecondaryHeader>Domestic Animals</SecondaryHeader>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, modi
        ipsa reprehenderit veritatis praesentium molestiae exercitationem vitae
        magnam, enim eius, excepturi dicta cumque quibusdam quidem labore non
        quo doloremque doloribus?
      </Description>
    </Container>
  )
}

export default Example1