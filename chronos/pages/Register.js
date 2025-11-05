import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function Register({ onDone }) {
  const [objective, setObjective] = useState('perder');
  const [experience, setExperience] = useState('intermediario');
  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
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
        <Text style={styles.subtitle}>Crie sua conta</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            placeholderTextColor="#BFD2E2"
            autoCapitalize="words"
            autoCorrect={false}
          />

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

          <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            placeholderTextColor="#BFD2E2"
            secureTextEntry
          />

          <Text style={styles.sectionLabel}>Informações físicas</Text>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.inputHalf]}
              placeholder="Altura (cm)"
              placeholderTextColor="#BFD2E2"
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, styles.inputHalf]}
              placeholder="Peso (kg)"
              placeholderTextColor="#BFD2E2"
              keyboardType="numeric"
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Data de nascimento (DD/MM/AAAA)"
            placeholderTextColor="#BFD2E2"
            keyboardType="numeric"
          />

          <Text style={styles.sectionLabel}>Objetivo principal</Text>
          <View style={styles.chipsWrap}>
            <TouchableOpacity
              style={[styles.chip, objective === 'perder' && styles.chipSelected]}
              onPress={() => setObjective('perder')}
              activeOpacity={0.85}
            >
              <Text style={objective === 'perder' ? styles.chipSelectedText : styles.chipText}>Perder peso</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.chip, objective === 'massa' && styles.chipSelected]}
              onPress={() => setObjective('massa')}
              activeOpacity={0.85}
            >
              <Text style={objective === 'massa' ? styles.chipSelectedText : styles.chipText}>Ganhar massa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.chip, objective === 'performance' && styles.chipSelected]}
              onPress={() => setObjective('performance')}
              activeOpacity={0.85}
            >
              <Text style={objective === 'performance' ? styles.chipSelectedText : styles.chipText}>Performance</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionLabel}>Nível de experiência</Text>
          <View style={styles.chipsWrap}>
            <TouchableOpacity
              style={[styles.chip, experience === 'iniciante' && styles.chipSelected]}
              onPress={() => setExperience('iniciante')}
              activeOpacity={0.85}
            >
              <Text style={experience === 'iniciante' ? styles.chipSelectedText : styles.chipText}>Iniciante</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.chip, experience === 'intermediario' && styles.chipSelected]}
              onPress={() => setExperience('intermediario')}
              activeOpacity={0.85}
            >
              <Text style={experience === 'intermediario' ? styles.chipSelectedText : styles.chipText}>Intermediário</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.chip, experience === 'avancado' && styles.chipSelected]}
              onPress={() => setExperience('avancado')}
              activeOpacity={0.85}
            >
              <Text style={experience === 'avancado' ? styles.chipSelectedText : styles.chipText}>Avançado</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.inputHalf]}
              placeholder="Frequência (dias/semana)"
              placeholderTextColor="#BFD2E2"
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, styles.inputHalf]}
              placeholder="Tempo de treino (min)"
              placeholderTextColor="#BFD2E2"
              keyboardType="numeric"
            />
          </View>

          <TextInput
            style={[styles.input, styles.inputMultiline]}
            placeholder="Restrições, lesões ou observações"
            placeholderTextColor="#BFD2E2"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.85}
            onPress={() => {
              if (typeof onDone === 'function') onDone();
            }}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>© {new Date().getFullYear()} CHRONOS, GO+ Group.</Text>
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
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 40,
    gap: 12,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 4,
    alignSelf: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '700',
    letterSpacing: 2,
    alignSelf: 'center',
  },
  subtitle: {
    color: '#FFFFFF',
    opacity: 0.85,
    marginTop: 4,
    marginBottom: 16,
    alignSelf: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 520,
    gap: 12,
  },
  sectionLabel: {
    color: '#FFFFFF',
    opacity: 0.8,
    marginTop: 4,
    marginBottom: -2,
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
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
  inputHalf: {
    flex: 1,
  },
  inputMultiline: {
    minHeight: 100,
  },
  chipsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  chipText: {
    color: '#FFFFFF',
    opacity: 0.9,
    fontSize: 12,
  },
  chipSelected: {
    backgroundColor: '#004D91',
    borderColor: '#004D91',
  },
  chipSelectedText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  button: {
    marginTop: 4,
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
    marginTop: 20,
    color: '#FFFFFF',
    opacity: 0.5,
    fontSize: 12,
    alignSelf: 'center',
  },
});
