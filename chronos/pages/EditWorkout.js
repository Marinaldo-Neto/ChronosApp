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

export default function EditWorkout({ onDone }) {
  const [name, setName] = useState('Treino A — Peito/Tríceps');
  const [goal, setGoal] = useState('hipertrofia');
  const [exercises, setExercises] = useState([
    { name: 'Supino reto', sets: '4', reps: '10', rest: '60' },
    { name: 'Crucifixo', sets: '3', reps: '12', rest: '60' },
    { name: 'Tríceps testa', sets: '3', reps: '10', rest: '60' },
  ]);

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
        <Text style={styles.subtitle}>Editar treino</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do treino"
            placeholderTextColor="#BFD2E2"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.sectionLabel}>Objetivo do treino</Text>
          <View style={styles.chipsWrap}>
            {[
              ['hipertrofia', 'Hipertrofia'],
              ['forca', 'Força'],
              ['resistencia', 'Resistência'],
            ].map(([key, label]) => (
              <TouchableOpacity
                key={key}
                style={[styles.chip, goal === key && styles.chipSelected]}
                onPress={() => setGoal(key)}
                activeOpacity={0.85}
              >
                <Text style={goal === key ? styles.chipSelectedText : styles.chipText}>{label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionLabel}>Exercícios</Text>
          {exercises.map((ex, idx) => (
            <View key={idx} style={styles.exerciseCard}>
              <TextInput
                style={styles.input}
                placeholder="Nome do exercício"
                placeholderTextColor="#BFD2E2"
                value={ex.name}
                onChangeText={(t) => {
                  const next = [...exercises];
                  next[idx] = { ...next[idx], name: t };
                  setExercises(next);
                }}
              />
              <View style={styles.row}>
                <TextInput
                  style={[styles.input, styles.inputThird]}
                  placeholder="Séries"
                  placeholderTextColor="#BFD2E2"
                  keyboardType="numeric"
                  value={ex.sets}
                  onChangeText={(t) => {
                    const next = [...exercises];
                    next[idx] = { ...next[idx], sets: t };
                    setExercises(next);
                  }}
                />
                <TextInput
                  style={[styles.input, styles.inputThird]}
                  placeholder="Reps"
                  placeholderTextColor="#BFD2E2"
                  keyboardType="numeric"
                  value={ex.reps}
                  onChangeText={(t) => {
                    const next = [...exercises];
                    next[idx] = { ...next[idx], reps: t };
                    setExercises(next);
                  }}
                />
                <TextInput
                  style={[styles.input, styles.inputThird]}
                  placeholder="Descanso (s)"
                  placeholderTextColor="#BFD2E2"
                  keyboardType="numeric"
                  value={ex.rest}
                  onChangeText={(t) => {
                    const next = [...exercises];
                    next[idx] = { ...next[idx], rest: t };
                    setExercises(next);
                  }}
                />
              </View>
            </View>
          ))}

          <TouchableOpacity style={[styles.button, styles.buttonGhost]} activeOpacity={0.85} onPress={() => {}}>
            <Text style={styles.buttonGhostText}>+ Adicionar exercício</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonPrimary]}
            activeOpacity={0.85}
            onPress={() => {
              if (typeof onDone === 'function') onDone();
            }}
          >
            <Text style={styles.buttonText}>Salvar alterações</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>© {new Date().getFullYear()} CHRONOS, GO+ Group.</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#000B15' },
  container: { alignItems: 'center', paddingHorizontal: 24, paddingTop: 48, paddingBottom: 40, gap: 12 },
  logo: { width: 110, height: 110, alignSelf: 'center' },
  title: { color: '#FFFFFF', fontSize: 24, fontWeight: '700', letterSpacing: 2, alignSelf: 'center' },
  subtitle: { color: '#FFFFFF', opacity: 0.85, marginTop: 4, marginBottom: 16, alignSelf: 'center' },
  form: { width: '100%', maxWidth: 560, gap: 12 },
  sectionLabel: { color: '#FFFFFF', opacity: 0.8, marginTop: 6, marginBottom: -2, fontSize: 13 },
  chipsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999, borderWidth: 1, borderColor: 'rgba(255,255,255,0.16)', backgroundColor: 'rgba(255,255,255,0.06)' },
  chipText: { color: '#FFFFFF', opacity: 0.9, fontSize: 12 },
  chipSelected: { backgroundColor: '#004D91', borderColor: '#004D91' },
  chipSelectedText: { color: '#FFFFFF', fontSize: 12, fontWeight: '700' },
  row: { flexDirection: 'row', gap: 12 },
  input: { width: '100%', paddingHorizontal: 16, paddingVertical: 14, borderRadius: 10, borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)', backgroundColor: 'rgba(255,255,255,0.04)', color: '#FFFFFF' },
  inputThird: { flex: 1 },
  exerciseCard: { gap: 8, padding: 12, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.03)' },
  button: { paddingVertical: 14, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  buttonPrimary: { backgroundColor: '#004D91' },
  buttonText: { color: '#FFFFFF', fontWeight: '700', letterSpacing: 0.5 },
  buttonGhost: { backgroundColor: 'transparent', borderWidth: 1, borderColor: 'rgba(255,255,255,0.16)' },
  buttonGhostText: { color: '#FFFFFF', fontWeight: '600', opacity: 0.95 },
  footerText: { marginTop: 20, color: '#FFFFFF', opacity: 0.5, fontSize: 12, alignSelf: 'center' },
});

