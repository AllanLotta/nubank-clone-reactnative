import React from 'react';
// import {StatusBar} from 'react-native';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import {Container} from './styles';

const Main = () => (
  <Container>
    <Header />
    <Tabs />
  </Container>
);

export default Main;
