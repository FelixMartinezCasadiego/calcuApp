import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
  },
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 20,

    justifyContent: 'flex-end',
  },
  resultado: {
    color: '#ffffff',
    fontSize: 60,
    textAlign: 'right',
  },
  resultadoPequeno: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
    flexWrap: 'wrap',
  },
  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#9b9b9b',
    borderRadius: 100,
    justifyContent: 'center',
    marginVertical: 4,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: '#000000',
    fontWeight: 'bold',
  },
});
