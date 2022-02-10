import styled from 'styled-components';

const Wrapper = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
        margin: auto;
    }
    img {
        width: 75px;
    }
    text-decoration: none;
    color: inherit;
    background-color: #3a3a3b;
    width: 200px;
    height: 125px;
    border-radius: 0.4em;
    padding: 1.5em;
    border-box: border-box;
    p {
        margin: 0;
        margin-top: auto;
        font-size: 16px;
        font-weight: 500;
    }
    transition: 100ms ease-in-out;
    :hover {
        background-color: #2a2a2a;
    }
`;


const Card = ({title, href, src}) => {
    return (
        <Wrapper href={href}>
            <div className='logo'>
                <img src={src} alt={title}/>
            </div>
            <p>{title}</p>
        </Wrapper>
    )
    
}

export default Card;