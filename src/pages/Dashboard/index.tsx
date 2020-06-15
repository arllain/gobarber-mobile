import React from 'react';
import { Button } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { Container, Header, HeaderTitle, UserName } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo, {'\n'}
          <UserName>Arllain Silva</UserName>
        </HeaderTitle>
      </Header>
    </Container>
  );
};

export default Dashboard;
