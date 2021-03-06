import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 1.6, justifyContent: 'center' })}
`;
const MenuItem = styled.div`
  display: flex;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  background-color: white;
  color: black;
  ${mobile({ fontSize: '12px', marginLeft: '8px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: '45px ' })}
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-size: 14px;
`;
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'grey', fontsize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Style Walks</Logo>
        </Center>
        <Right>
          <Link to="/register">
            <Button>REGISTER</Button>
          </Link>
          <Link to="/login">
            <Button>SIGN IN</Button>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
