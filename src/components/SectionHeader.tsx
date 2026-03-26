import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SectionHeaderProps {
  title: string;
  link?: string;
}

export default function SectionHeader({ title, link }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {link && (
        <TouchableOpacity>
          <Text style={styles.link}>{link}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 16,
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#1A1A1A' },
  link: { fontSize: 14, color: '#2D5A27', fontWeight: '500' },
});