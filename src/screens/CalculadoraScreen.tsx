import {View, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {styles} from '../theme/appTheme';
import ButtonCal from '../components/ButtonCal';
import {arrayCal} from '../utils/constants/dataCal';

export enum Operators {
  sum,
  subtract,
  multiply,
  divide,
}

const CalculadoraScreen = () => {
  const [number, setNumber] = useState<string>('100');
  const [beforeNumber, setBeforeNumber] = useState<string>('0');
  const lastOperation = useRef<Operators>();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.calculadoraContainer}>
      {beforeNumber !== '0' ? (
        <Text style={styles.resultadoPequeno}>{beforeNumber}</Text>
      ) : null}

      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit={true}>
        {number}
      </Text>

      <View style={styles.fila}>
        {arrayCal.map(data => (
          <ButtonCal
            key={data.text}
            text={data.text}
            color={data.color}
            setNumber={setNumber}
            number={number}
            beforeNumber={beforeNumber}
            setBeforeNumber={setBeforeNumber}
            lastOperation={lastOperation}
          />
        ))}
      </View>
    </View>
  );
};

export default CalculadoraScreen;
