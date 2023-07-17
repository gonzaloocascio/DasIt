/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/index';
import { loginRequest } from '@store/modules/user/actions';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  MainWrapper,
  CardWrapper,
  LogoContainer,
  ContentContainer,
  Input,
  Button,
} from './styles';
import { Logo, HidePass, ShowPass } from '@assets/icons';
import { Success } from '@src/components';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState('AdminDsit');
  const [password, setPassword] = useState('Admin45Das18It');
  const [showPass, setShowPass] = useState(false);
  // const { requestErrorMsg } = useSelector((state: RootState) => state.user);
  const [errorLabel, setErrorLabel] = useState('');

  const login = () => {
    const hasErrorUsername = doValidateUsername();
    const hasErrorPassword = doValidatePassword();

    if (hasErrorUsername && hasErrorPassword) {
      Keyboard.dismiss();
      dispatch(
        loginRequest({
          user,
          password,
        }),
      );
    }
  };

  const doValidateUsername = () => {
    const hasErrorUsername = user.trim() === '';

    setErrorLabel(hasErrorUsername ? 'Campos Requeridos' : '');

    if (!hasErrorUsername) {
      return true;
    }

    return false;
  };

  const doValidatePassword = () => {
    const hasErrorPassword = password.trim() === '';

    setErrorLabel(hasErrorPassword ? 'Campos Requeridos' : '');
    if (!hasErrorPassword) {
      return true;
    }

    return false;
  };

  return (
    <MainWrapper>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <CardWrapper>
          <LogoContainer>
            {/* <Logo /> */}
            <Logo height={250} />
          </LogoContainer>
          <ContentContainer>
            <Success error={errorLabel} />
            <Input
              value={user}
              placeholder="Usuario"
              onBlur={() => {
                doValidateUsername();
              }}
              onChangeText={text => setUser(text)}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Input
                value={password}
                placeholder="Contraseña"
                secureTextEntry={!showPass}
                style={{ width: '90%' }}
                onBlur={() => {
                  doValidatePassword();
                }}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity
                onPress={() => {
                  setShowPass(state => !state);
                }}>
                {!showPass ? (
                  <ShowPass width={30} height={30} />
                ) : (
                  <HidePass width={20} height={20} />
                )}
              </TouchableOpacity>
            </View>
            <Button title="Iniciar Sesion" onPress={() => login()} />
          </ContentContainer>
        </CardWrapper>
      </KeyboardAvoidingView>
    </MainWrapper>
  );
};

export default Login;
