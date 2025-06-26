import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function App() {
  const [total, setTotal] = useState('');
  const [pessoas, setPessoas] = useState('');
  const [taxa, setTaxa] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const valor = calcularDivisao(parseFloat(total), parseInt(pessoas), parseFloat(taxa) || 0);
    setResultado(`Cada pessoa deve pagar R$ ${valor}`);
  };

  const calcularDivisao = (total, pessoas, taxa = 0) => {
    const valorComTaxa = total + (total * taxa / 100);
    return (valorComTaxa / pessoas).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>DivApp - Divisor de Conta</Text>
      <TextInput placeholder="Valor total da conta" keyboardType="numeric" style={styles.input} onChangeText={setTotal} />
      <TextInput placeholder="Número de pessoas" keyboardType="numeric" style={styles.input} onChangeText={setPessoas} />
      <TextInput placeholder="Taxa de serviço (%)" keyboardType="numeric" style={styles.input} onChangeText={setTaxa} />
      <Button title="Calcular" onPress={calcular} />
      {resultado && <Text style={styles.resultado}>{resultado}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#4682B4',
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff'
  },

  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'lightgreen'
  },
});
