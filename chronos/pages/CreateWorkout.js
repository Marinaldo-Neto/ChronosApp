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

export default function CreateWorkout({ onDone }) {
  const [goal, setGoal] = useState('hipertrofia');
  const [split, setSplit] = useState('abc');
  const [days, setDays] = useState(['seg', 'qua', 'sex']);
  const [exercises, setExercises] = useState([
    { name: 'Supino reto', sets: '4', reps: '10', rest: '60' },
    { name: 'Agachamento livre', sets: '4', reps: '8', rest: '90' },
  ]);

  const toggleDay = (key) => {
    setDays((prev) =>
      prev.includes(key) ? prev.filter((d) => d !== key) : [...prev, key]
    );
  };

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
        <Text style={styles.subtitle}>Criar treino</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do treino (ex.: ABC, Push/Pull/Legs)"
            placeholderTextColor="#BFD2E2"
          />

          <Text style={styles.sectionLabel}>Objetivo do treino</Text>
          <View style={styles.chipsWrap}>
            <TouchableOpacity
              style={[styles.chip, goal === 'hipertrofia' && styles.chipSelected]}
              onPress={() => setGoal('hipertrofia')}
              activeOpacity={0.85}
            >
              <Text style={goal === 'hipertrofia' ? styles.chipSelectedText : styles.chipText}>Hipertrofia</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.chip, goal === 'forca' && styles.chipSelected]}
              onPress={() => setGoal('forca')}
              activeOpacity={0.85}
            >
              <Text style={goal === 'forca' ? styles.chipSelectedText : styles.chipText}>Força</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.chip, goal === 'resistencia' && styles.chipSelected]}
              onPress={() => setGoal('resistencia')}
              activeOpacity={0.85}
            >
              <Text style={goal === 'resistencia' ? styles.chipSelectedText : styles.chipText}>Resistência</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionLabel}>Divisão de treino</Text>
          <View style={styles.chipsWrap}>
            <TouchableOpacity
              style={[styles.chip, split === 'full' && styles.chipSelected]}
              onPress={() => setSplit('full')}
              activeOpacity={0.85}
            >
              <Text style={split === 'full' ? styles.chipSelectedText : styles.chipText}>Full Body</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.chip, split === 'upperlower' && styles.chipSelected]}
              onPress={() => setSplit('upperlower')}
              activeOpacity={0.85}
            >
              <Text style={split === 'upperlower' ? styles.chipSelectedText : styles.chipText}>Upper/Lower</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.chip, split === 'abc' && styles.chipSelected]}
              onPress={() => setSplit('abc')}
              activeOpacity={0.85}
            >
              <Text style={split === 'abc' ? styles.chipSelectedText : styles.chipText}>ABC</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionLabel}>Dias da semana</Text>
          <View style={styles.chipsWrap}>
            {[
              ['seg', 'Seg'],
              ['ter', 'Ter'],
              ['qua', 'Qua'],
              ['qui', 'Qui'],
              ['sex', 'Sex'],
              ['sab', 'Sáb'],
              ['dom', 'Dom'],
            ].map(([key, label]) => {
              const selected = days.includes(key);
              return (
                <TouchableOpacity
                  key={key}
                  style={[styles.chip, selected && styles.chipSelected]}
                  onPress={() => toggleDay(key)}
                  activeOpacity={0.85}
                >
                  <Text style={selected ? styles.chipSelectedText : styles.chipText}>{label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.sectionLabel}>Exercícios</Text>

          {exercises.map((ex, idx) => (
            <View key={idx} style={styles.exerciseCard}>
              <TextInput
                style={styles.input}
                placeholder="Nome do exercício"
                placeholderTextColor="#BFD2E2"
                defaultValue={ex.name}
              />
              <View style={styles.row}>
                <TextInput
                  style={[styles.input, styles.inputThird]}
                  placeholder="Séries"
                  placeholderTextColor="#BFD2E2"
                  keyboardType="numeric"
                  defaultValue={ex.sets}
                />
                <TextInput
                  style={[styles.input, styles.inputThird]}
                  placeholder="Reps"
                  placeholderTextColor="#BFD2E2"
                  keyboardType="numeric"
                  defaultValue={ex.reps}
                />
                <TextInput
                  style={[styles.input, styles.inputThird]}
                  placeholder="Descanso (s)"
                  placeholderTextColor="#BFD2E2"
                  keyboardType="numeric"
                  defaultValue={ex.rest}
                />
              </View>
            </View>
          ))}

          <TouchableOpacity
            style={[styles.button, styles.buttonGhost]}
            activeOpacity={0.85}
            onPress={() => {}}
          >
            <Text style={styles.buttonGhostText}>+ Adicionar exercício</Text>
          </TouchableOpacity>

          <Text style={styles.sectionLabel}>Observações</Text>
          <TextInput
            style={[styles.input, styles.inputMultiline]}
            placeholder="Observações gerais do treino"
            placeholderTextColor="#BFD2E2"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />

          <TouchableOpacity
            style={[styles.button, styles.buttonPrimary]}
            activeOpacity={0.85}
            onPress={() => {
              if (typeof onDone === 'function') onDone();
            }}
          >
            <Text style={styles.buttonText}>Salvar treino</Text>
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
    width: 120,
    height: 120,
    marginBottom: 4,
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
    marginBottom: 16,
    alignSelf: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 560,
    gap: 12,
  },
  sectionLabel: {
    color: '#FFFFFF',
    opacity: 0.8,
    marginTop: 6,
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
  inputMultiline: {
    minHeight: 100,
  },
  inputThird: {
    flex: 1,
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
  exerciseCard: {
    gap: 8,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  button: {
    paddingVertical: 14,
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
  buttonGhost: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
  },
  buttonGhostText: {
    color: '#FFFFFF',
    fontWeight: '600',
    opacity: 0.95,
  },
  footerText: {
    marginTop: 20,
    color: '#FFFFFF',
    opacity: 0.5,
    fontSize: 12,
    alignSelf: 'center',
  },
});

