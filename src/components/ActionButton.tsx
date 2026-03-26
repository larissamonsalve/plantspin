import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LucideIcon } from 'lucide-react-native';

interface ActionButtonProps {
  label: string;
  icon: LucideIcon;
  onPress?: () => void;
}

export default function ActionButton({ label, icon: Icon, onPress }: ActionButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress} 
      activeOpacity={0.7}
    >
      <View style={styles.iconWrapper}>
        <Icon color="#2D5A27" size={24} strokeWidth={2} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%', // Garante que dois botões caibam lado a lado com um pequeno espaço
    backgroundColor: 'white',
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    // Borda bem sutil conforme a imagem
    borderWidth: 1,
    borderColor: '#F0F0F0',
    // Sombra leve
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  iconWrapper: {
    backgroundColor: '#F0F4F0',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
  },
});