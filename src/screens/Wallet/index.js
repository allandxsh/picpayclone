import React from "react";
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { Switch } from 'react-native';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
} from "./styles";



export default function Home() {
  return (
    <Wrapper>
      <Header colors={['#52E78C', '#1AB563']}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>0,00</Bold>
            </Value>

            <EyeButton>
                <Feather name="eye" size={28} color="#fff" />
            </EyeButton>
          </BalanceContainer>

          <Info>
              Seu saldo está rendendo 100% do CDI
          </Info>

          <Actions>
              <Action>
                  <MaterialCommunityIcons name="cash" size={30} color="#fff" />
                  <ActionLabel>Adicionar</ActionLabel>
              </Action>

              <Action>
                  <MaterialCommunityIcons name="bank" size={20} color="#fff" />
                  <ActionLabel>Retirar</ActionLabel>
              </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
          <UseBalanceTitle>
              Usar saldo ao pagar
          </UseBalanceTitle>

          <Switch />
      </UseBalance>

      <PaymentMethods>
          <PaymentMethodsTitle>
              Formas de pagamento
          </PaymentMethodsTitle>

          <Card>

          </Card>
      </PaymentMethods>
    </Wrapper>
  );
}
