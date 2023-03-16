import React, { useState } from 'react';
import { HeaderContainer, Menu, MenuItem } from './styles';

const Header = (props) => {
  const [menuAtivo, setMenuAtivo] = useState(0);

  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};

export default Header;
