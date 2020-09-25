import React from 'react';
import {View} from 'react-native';
import NuLogo from '~/assets/Nubank_Logo.png';
import {Container, Logo, Title, Top} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <Container>
      <Top>
        <Logo source={NuLogo} />
        <Title>Allan</Title>
      </Top>
      <Icon name="keyboard-arrow-down" color="#fff" size={20} />
    </Container>
  );
};

export default Header;
