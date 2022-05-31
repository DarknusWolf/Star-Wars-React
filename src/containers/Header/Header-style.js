import styled from "styled-components";

const HeaderContainer = styled.header`
    z-index: 999;
    position: relative;
    width: 100%;
    height: 100px;
    padding: 8px 30px;
    background-color: black;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        max-width: 100%;
        max-height: 80px;
        transition: all 300ms;
        // &:hover{
        //     fill: #FFE81F; 
        // }
    }
    div.enlaces{
        a{
            font-family: 'SW';
            font-size: 28px;
            font-weight: lighter;
            text-decoration:none;
            color: white;
            margin-left: 40px;
            transition: all 300ms;
            &:hover{
                color: #FFE81F;
            }
        }
    }
`;

export default HeaderContainer;