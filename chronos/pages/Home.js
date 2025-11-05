import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function Home({ onNavigate }) {
  const today = {
    title: 'Treino A — Peito/Tríceps',
    info: '3 exercícios principais • ~45–60 min',
    items: ['Supino reto 4x10', 'Crucifixo 3x12', 'Tríceps testa 3x10'],
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require('../assets/Logo CHRONOS.png')}
          style={styles.logo}
          resizeMode="contain"
          accessible
          accessibilityLabel="Logo CHRONOS"
        />

        <Text style={styles.title}>CHRONOS</Text>
        <Text style={styles.subtitle}>Home</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Seu treino de hoje</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{today.title}</Text>
            <Text style={styles.cardInfo}>{today.info}</Text>
            <View style={styles.cardList}>
              {today.items.map((txt, idx) => (
                <Text key={idx} style={styles.cardItem}>• {txt}</Text>
              ))}
            </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonPrimary]}
              activeOpacity={0.85}
              onPress={() => onNavigate && onNavigate('editWorkout')}
            >
              <Text style={styles.buttonText}>Ver treino do dia</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ações rápidas</Text>
          <View style={styles.grid}>
            <TouchableOpacity
              style={[styles.tile, styles.tilePrimary]}
              activeOpacity={0.85}
              onPress={() => onNavigate && onNavigate('workout')}
            >
              <Text style={styles.tileText}>Criar novo treino</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tile}
              activeOpacity={0.85}
              onPress={() => onNavigate && onNavigate('editWorkout')}
            >
              <Text style={styles.tileText}>Editar treino atual</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tile}
              activeOpacity={0.85}
              onPress={() => onNavigate && onNavigate('menu')}
            >
              <Text style={styles.tileText}>Ver perfil</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.footerText}>© {new Date().getFullYear()} CHRONOS, Group.</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000B15',
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 32,
    gap: 16,
  },
  logo: {
    width: 110,
    height: 110,
    alignSelf: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 2,
    alignSelf: 'center',
  },
  subtitle: {
    color: '#FFFFFF',
    opacity: 0.85,
    marginTop: 4,
    marginBottom: 8,
    alignSelf: 'center',
  },
  section: {
    gap: 8,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontWeight: '700',
    opacity: 0.95,
    fontSize: 16,
  },
  card: {
    gap: 10,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  cardTitle: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  cardInfo: {
    color: '#FFFFFF',
    opacity: 0.75,
  },
  cardList: {
    gap: 4,
  },
  cardItem: {
    color: '#FFFFFF',
    opacity: 0.9,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  tile: {
    flexGrow: 1,
    minWidth: 140,
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  tilePrimary: {
    backgroundColor: '#004D91',
    borderColor: '#004D91',
  },
  tileText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  button: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#004D91',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  footerText: {
    marginTop: 8,
    color: '#FFFFFF',
    opacity: 0.5,
    fontSize: 12,
    alignSelf: 'center',
  },
});
