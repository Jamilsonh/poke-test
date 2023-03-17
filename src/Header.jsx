import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderImg,
  HeaderImgContainer,
  HeaderMenu,
  Menu,
  MenuItem,
} from './styles';
import Logo from './Gifs/Logo.png';

const Header = (props) => {
  const [menuAtivo, setMenuAtivo] = useState(0);

  return (
    <HeaderContainer>
      <HeaderMenu>
        <HeaderImgContainer>
          <HeaderImg src={Logo} />
        </HeaderImgContainer>
        <Menu>
          {props.menuItems.map((item, index) => (
            <MenuItem
              to={'/' + item.path}
              onClick={() => setMenuAtivo(index)}
              ativo={menuAtivo === index}
            >
              {item.name}
            </MenuItem>
          ))}
        </Menu>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
