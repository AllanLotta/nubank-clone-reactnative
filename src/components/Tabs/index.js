import React from 'react';
// import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, TabsContainer, TabItem, TabText} from './styles';

const Tabs = () => {
  const tabItems = [
    {
      id: '01',
      title: 'Indicar Amigos',
      icon: 'person-add',
      action: null,
    },
    {
      id: '02',
      title: 'Cobrar',
      icon: 'chat-bubble-outline',
      action: null,
    },
    {
      id: '03',
      title: 'Depositar',
      icon: 'arrow-downward',
      action: null,
    },
    {
      id: '04',
      title: 'Transferir',
      icon: 'arrow-upward',
      action: null,
    },
    {
      id: '05',
      title: 'Bloquear Cartão',
      icon: 'lock',
      action: null,
    },
  ];

  return (
    <Container>
      <TabsContainer>
        {tabItems.map((item) => (
          <TabItem key={item.id}>
            <Icon name={item.icon} size={24} color="#FFF" />
            <TabText>{item.title}</TabText>
          </TabItem>
        ))}
      </TabsContainer>
    </Container>
  );
};

export default Tabs;
