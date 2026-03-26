import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LucideIcon } from 'lucide-react-native';

interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
  icon: LucideIcon;
}

export default function StatCard({ title, value, percentage, icon: Icon }: StatCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconWrapper}>
        <Icon color="#2D5A27" size={20} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.percentage}>{percentage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '48%',
    padding: 16,
    borderRadius: 16,
  },
  iconWrapper: {
    backgroundColor: '#F0F4F0',
    padding: 8,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  title: { fontSize: 12, color: '#666', marginBottom: 4 },
  value: { fontSize: 20, fontWeight: 'bold', color: '#1A1A1A' },
  percentage: { fontSize: 12, color: '#4CAF50', fontWeight: '600', marginTop: 4 },
});