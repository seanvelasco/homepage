import styled from "styled-components";
import Card from "../components/Card";
import device from "../constants/device";
import links from "../links.json";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1f;
    gap: 2em;
    @media ${device.tablet} {
        grid-template-columns: 1fr 1fr;
    }
    
    @media ${device.laptop} {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media ${device.laptopL} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media ${device.desktop} {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
`;

const Homepage = () => {
    return (
        <Wrapper>
            {
                links.map((link, index) => {
                    return (
                        <Card
                            key={index}
                            title={link.site}
                            href={link.url}
                            src={link.image}
                        />
                    )
                }
                )
            }
        </Wrapper>
    )
}

export default Homepage;