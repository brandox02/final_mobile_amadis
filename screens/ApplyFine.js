import React, { useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import { Block, Checkbox, Text, Button as GaButton, theme } from 'galio-framework';

import { Button, Icon, Input } from '../components';
import { nowTheme } from '../constants';

const { width, height } = Dimensions.get('screen');

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

const inputs = [
  {
    key: 'cedula',
    placeholder: 'Cédula',
  },
  {
    key: 'plate',
    placeholder: 'Place del Vehiculo',
  },
  {
    key: 'reason',
    placeholder: 'Motivo de la multa',
  },
  {
    key: 'evidenceImage',
    placeholder: 'Foto de Evidencia',
  },
  {
    key: 'comment',
    placeholder: 'Comentario',
  },
  {
    key: 'latitude',
    placeholder: 'Latitud',
  },
  {
    key: 'longitude',
    placeholder: 'Longitud',
  },
  {
    key: 'longitude',
    placeholder: 'Longitud',
  },
  {
    key: 'date',
    placeholder: 'Fecha',
  },
  {
    key: 'hour',
    placeholder: 'Hora',
  },
];

function ApplyFine() {
  const [inputStates, setInputStates] = useState({});
  const genericOnChange = (key) => (evt) => setInputStates({ ...inputStates, [key]: evt.value });

  return (
    <DismissKeyboard>
      <Block flex middle>
        <Block flex middle>
          <Block style={styles.registerContainer}>
            <Block flex space="evenly">
              <Block flex={0.4} middle style={styles.socialConnect}>
                <Block flex={0.5} middle>
                  <Text
                    style={{
                      fontFamily: 'montserrat-regular',
                      textAlign: 'center',
                    }}
                    color="#333"
                    size={24}
                  >
                    Aplicar Multa
                  </Text>
                </Block>
              </Block>
              <Block flex={0.1} middle>
                <Text
                  style={{
                    fontFamily: 'montserrat-regular',
                    textAlign: 'center',
                  }}
                  muted
                  size={16}
                >
                  Ingresa la información correspondiente
                </Text>
              </Block>
              <Block flex={1} middle space="between">
                <ScrollView>
                  <Block center flex={0.9}>
                    <Block flex space="between">
                      <Block>
                        {inputs.map((input) => (
                          <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                            <Input
                              onChangeText={genericOnChange(input.key)}
                              placeholder={input.placeholder}
                              style={styles.inputs}
                              iconContent={
                                <Icon
                                  size={16}
                                  color="#ADB5BD"
                                  name="profile-circle"
                                  family="NowExtra"
                                  style={styles.inputIcons}
                                />
                              }
                            />
                          </Block>
                        ))}

                        <Block
                          style={{ marginVertical: theme.SIZES.BASE, marginLeft: 15 }}
                          row
                          width={width * 0.75}
                        >
                          <Checkbox
                            checkboxStyle={{
                              borderWidth: 1,
                              borderRadius: 2,
                              borderColor: '#E3E3E3',
                              // width: 100
                            }}
                            color={nowTheme.COLORS.PRIMARY}
                            labelStyle={{
                              color: nowTheme.COLORS.HEADER,
                              fontFamily: 'montserrat-regular',
                            }}
                            label={`Acepto los terminos y condiciones como agente de tránsito que soy.`}
                          />
                        </Block>
                      </Block>
                      <Block center>
                        <Button color="primary" round style={styles.createButton}>
                          <Text
                            style={{ fontFamily: 'montserrat-bold' }}
                            size={14}
                            color={nowTheme.COLORS.WHITE}
                          >
                            Aplicar
                          </Text>
                        </Button>
                      </Block>
                    </Block>
                  </Block>
                </ScrollView>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
  },
  imageBackground: {
    width: width,
    height: height,
  },
  registerContainer: {
    marginTop: 55,
    width: width * 0.9,
    height: height < 812 ? height * 0.8 : height * 0.8,
    backgroundColor: nowTheme.COLORS.WHITE,
    borderRadius: 4,
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden',
  },
  socialConnect: {
    backgroundColor: nowTheme.COLORS.WHITE,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderColor: "rgba(136, 152, 170, 0.3)"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  socialTextButtons: {
    color: nowTheme.COLORS.PRIMARY,
    fontWeight: '800',
    fontSize: 14,
  },
  inputIcons: {
    marginRight: 12,
    color: nowTheme.COLORS.ICON_INPUT,
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 21.5,
  },
  passwordCheck: {
    paddingLeft: 2,
    paddingTop: 6,
    paddingBottom: 15,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
    marginBottom: 40,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});

export default ApplyFine;
