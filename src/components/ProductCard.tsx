import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.42;

interface ProductCardProps {
  name: string;
  soldCount: string;
  imageUrl?: string;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1509423305814-c25550449ee3?q=80&w=400&auto=format&fit=crop';

export default function ProductCard({ name, soldCount, imageUrl }: ProductCardProps) {
  
  const source = { uri: imageUrl || FALLBACK_IMAGE };

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        <Image
          source={source}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Detalhes do Produto */}
      <View style={styles.detailsContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.sold}>
          {soldCount}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: CARD_WIDTH,
    borderRadius: 16,
    marginRight: 16,
    marginBottom: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden', 
  },
  imageContainer: {
    width: '100%',
    height: 120, 
    backgroundColor: '#F0F2F0', 
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    padding: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  sold: {
    fontSize: 12,
    color: '#666',
  },
});