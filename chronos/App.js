import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateWorkout from './pages/CreateWorkout';
import Home from './pages/Home';
import EditWorkout from './pages/EditWorkout';

export default function App() {
  const [screen, setScreen] = useState('menu');

  return (
    <View style={{ flex: 1, backgroundColor: '#000B15' }}>
      {screen === 'menu' ? (
        <View style={styles.menu}>
          <Image
            source={require('./assets/Logo CHRONOS.png')}
            style={styles.logo}
            resizeMode="contain"
            accessible
            accessibilityLabel="Logo CHRONOS"
          />
          <Text style={styles.appTitle}>CHRONOS</Text>

          <Text style={styles.menuSectionTitle}>Telas criadas:</Text>

          <TouchableOpacity
            style={[styles.navButton, styles.navButtonStandard]}
            onPress={() => setScreen('home')}
            activeOpacity={0.85}
          >
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, styles.navButtonStandard]}
            onPress={() => setScreen('login')}
            activeOpacity={0.85}
          >
            <Text style={styles.navText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, styles.navButtonStandard]}
            onPress={() => setScreen('register')}
            activeOpacity={0.85}
          >
            <Text style={styles.navText}>Cadastro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, styles.navButtonStandard]}
            onPress={() => setScreen('workout')}
            activeOpacity={0.85}
          >
            <Text style={styles.navText}>Criar Treino</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, styles.navButtonStandard]}
            onPress={() => setScreen('editWorkout')}
            activeOpacity={0.85}
          >
            <Text style={styles.navText}>Editar Treino</Text>
          </TouchableOpacity>

          <Text style={styles.menuFooter}>© {new Date().getFullYear()} CHRONOS, GO+ Group.</Text>
        </View>
      ) : screen === 'login' ? (
        <Login onDone={() => setScreen('menu')} />
      ) : screen === 'register' ? (
        <Register onDone={() => setScreen('menu')} />
      ) : screen === 'home' ? (
        <Home onNavigate={(dest) => setScreen(dest)} />
      ) : screen === 'editWorkout' ? (
        <EditWorkout onDone={() => setScreen('menu')} />
      ) : (
        <CreateWorkout onDone={() => setScreen('menu')} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 56,
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: { width: 120, height: 120 },
  appTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 2,
  },
  menuSectionTitle: {
    marginTop: 8,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
  },
  navButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
    minWidth: 240,
    alignSelf: 'center',
  },
  navButtonStandard: {
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  navText: {
    color: '#FFFFFF',
    fontWeight: '600',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  menuFooter: {
    marginTop: 'auto',
    marginBottom: 16,
    color: '#FFFFFF',
    opacity: 0.5,
    fontSize: 12,
  },
});
