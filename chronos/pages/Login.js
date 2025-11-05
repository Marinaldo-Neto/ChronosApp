import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Login({ onDone }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Image
        source={require('../assets/Logo CHRONOS.png')}
        style={styles.logo}
        resizeMode="contain"
        accessible
        accessibilityLabel="Logo CHRONOS"
      />

      <Text style={styles.title}>CHRONOS</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#BFD2E2"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#BFD2E2"
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={() => {
            if (typeof onDone === 'function') onDone();
          }}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>© {new Date().getFullYear()} CHRONOS, GO+ Group</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000B15',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 2,
  },
  subtitle: {
    color: '#FFFFFF',
    opacity: 0.8,
    marginTop: 6,
    marginBottom: 24,
  },
  form: {
    width: '100%',
    maxWidth: 420,
    gap: 12,
  },
  input: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    backgroundColor: 'rgba(255,255,255,0.04)',
    color: '#FFFFFF',
  },
  button: {
    marginTop: 8,
    backgroundColor: '#004D91',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  footerText: {
    position: 'absolute',
    bottom: 24,
    color: '#FFFFFF',
    opacity: 0.5,
    fontSize: 12,
  },
});
