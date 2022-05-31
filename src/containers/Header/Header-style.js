import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    height: 100px;
    padding: 8px 20px;
    background-color: black;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        max-width: 100%;
        max-height: 80px;
    }
`;

export default HeaderContainer;