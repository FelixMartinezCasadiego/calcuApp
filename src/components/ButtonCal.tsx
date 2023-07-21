import {View, Text, TouchableOpacity} from 'react-native';
import React, {Dispatch, MutableRefObject, SetStateAction} from 'react';
import {styles} from '../theme/appTheme';
import {Operators} from '../screens/CalculadoraScreen';

type Props = {
  text: string;
  color: string;
  setNumber: Dispatch<SetStateAction<string>>;
  setBeforeNumber: Dispatch<SetStateAction<string>>;
  beforeNumber: string;
  number: string;
  lastOperation: MutableRefObject<Operators | undefined>;
};

const ButtonCal = ({
  text,
  color,
  setNumber,
  number,
  beforeNumber,
  setBeforeNumber,
  lastOperation,
}: Props) => {
  const calcuAction = () => {
    switch (text) {
      case 'C':
        setNumber('0');
        setBeforeNumber('0');
        break;
      case '+/-':
        if (number.includes('-')) {
          setNumber(number.replace('-', ''));
        } else {
          setNumber('-' + number);
        }
        break;
      case '.':
        if (number.includes('.')) return;
        setNumber(number + text);
        break;
      case 'del':
        let negative = '';
        let tempNumber = number;
        if (number.includes('-')) {
          negative = '-';
          tempNumber = number.slice(1);
        }
        if (tempNumber.length > 1) {
          setNumber(negative + tempNumber.slice(0, -1));
        } else {
          setNumber('0');
        }
        break;
      case '÷':
        setBeforeNumber(number);
        setNumber('0');
        lastOperation.current = Operators.divide;
        break;
      case 'x':
        setBeforeNumber(number);
        setNumber('0');
        lastOperation.current = Operators.multiply;
        break;
      case '-':
        setBeforeNumber(number);
        setNumber('0');
        lastOperation.current = Operators.subtract;
        break;
      case '+':
        setBeforeNumber(number);
        setNumber('0');
        lastOperation.current = Operators.sum;
        break;
      case '=':
        const num1 = Number(number);
        const num2 = Number(beforeNumber);
        switch (lastOperation.current) {
          case Operators.sum:
            setNumber(`${num1 + num2}`);
            break;
          case Operators.subtract:
            setNumber(`${num2 - num1}`);
            break;
          case Operators.multiply:
            setNumber(`${num1 * num2}`);
            break;
          case Operators.divide:
            setNumber(`${num2 / num1}`);
            break;
        }
        setBeforeNumber('0');
        break;
      default:
        if (
          (number.startsWith('0') && !number.includes('.')) ||
          (number.startsWith('-0') && !number.includes('.'))
        ) {
          setNumber(text);
        } else {
          setNumber(number + text);
        }
        break;
    }
  };

  return (
    <TouchableOpacity onPress={calcuAction}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: text === '0' ? 165 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9b9b9b' ? '#000000' : '#ffffff',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCal;
