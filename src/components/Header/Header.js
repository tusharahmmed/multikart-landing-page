import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaAngleLeft, FaSearch, FaCartArrowDown, FaCog } from 'react-icons/fa';

const Header = () => {

    const [isHumberger, setIsHumberger] = useState(false);

    return (

        <Container>
            <Wraper>
                <LeftSide>
                    <span onClick={() => { setIsHumberger(true) }}>
                        <FaBars size={28} />
                    </span>
                    <img src="/img/logo.png" alt="" />
                </LeftSide>
                <RightSide>
                    <MenuAction>
                        <img src="/img/search.png" alt="" />
                    </MenuAction>
                    <MenuAction>
                        <img src="/img/setting.png" alt="" />
                    </MenuAction>
                    <MenuAction>
                        <img src="/img/cart.png" alt="" />
                    </MenuAction>
                </RightSide>
            </Wraper>


            {/* HumbergerMenu  */}
            <HumbergerNav isHumberger={isHumberger}>
                <Back onClick={() => setIsHumberger(false)}>
                    <FaAngleLeft size={28} /> <span>BACK</span>
                </Back>
                <Lists>
                    <p>Clothing</p>
                    <p>Bags</p>
                    <p>Footwear</p>
                    <p>Watches</p>
                    <p>Beauty & personal care</p>
                    <p>Home & Decore</p>
                    <p>Kitchen</p>
                </Lists>
            </HumbergerNav>

            {/* bottom menu  */}
            <BottomNav>

                <span>
                    <FaSearch color='#999999' size={22} />
                </span>
                <span>
                    <FaCartArrowDown color='#999999' size={22} />
                </span>
                <span>
                    <FaCog color='#999999' size={22} />
                </span>

            </BottomNav>


        </Container>

    );
};

export default Header;


// default menu 
const Container = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    padding: 40px 60px;

`;
const Wraper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

`;
const LeftSide = styled.div`
    display: flex;
    align-items: center;

    span{
        cursor: pointer;
    }

    img{
        margin-left: 45px;
    }
`;
const RightSide = styled.div`
    display: flex;
`;
const MenuAction = styled.div`
    margin-right: 20px;
    cursor: pointer;

    &:last-child{
        margin: 0;
    }

    @media(max-width: 500px){
        display: none;
    }
`;


// humberger nav 

const HumbergerNav = styled.div`

    transform: ${(props) => props.isHumberger ? "translateX(0px)" : "translateX(-100%)"};
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    width: 300px;
    background: #fff;
    z-index: 10;
    transition: all .4s ease-in-out;
`;
const Back = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #80808030;
    cursor: pointer;

    span{
        margin-left: 5px;
        font-size: 18px;

    }
`;
const Lists = styled.div`
    padding-top: 10px;

    p{
        padding: 10px 50px 20px 40px;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 14px;
        color: #222222

        &:hover{
            background: gray;
        }
    }
`;


//  Bottom nav 
const BottomNav = styled.div`
    background: #333;
    position: fixed;
    left: 0px;
    bottom: 0px;
    right: 0px;
    height: 60px;
    z-index: 5;

    display: flex;
    align-items: center;
    justify-content: space-around;

    @media(min-width: 500px){
        display: none;
    }
`;