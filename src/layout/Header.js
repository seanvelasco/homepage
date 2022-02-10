import styled from "styled-components";
import Dropdown  from "../components/Dropdown";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	.user {
		img {
			width: 40px;
			border-radius: 50%;
		}
		margin-right: 1em;
	}
	margin: 1em 0;
`;

const Header = () => {
	return (
		<Wrapper>
			<Dropdown />
			{/* <div className="user"><img src='user.jpg' /></div>
			<p>Let's burn some midnight oil</p> */}
		</Wrapper>
	);
}

export default Header;