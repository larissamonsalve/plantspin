import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Search, Plus, Filter } from 'lucide-react-native';

const DATA = [
  { id: '1', name: 'Suculenta Mix', price: 'R$ 25,00', stock: 45, image: 'https://images.unsplash.com/photo-1509307221005-09d1e34589d8?q=80&w=200' },
  { id: '2', name: 'Monstera Deliciosa', price: 'R$ 85,00', stock: 12, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=200' },
];

export default function Inventory() {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState('');

  // Componente de cada item da lista
  const renderItem = ({ item }: { item: typeof DATA[0] }) => (
    <TouchableOpacity 
      style={styles.productItem} 
      activeOpacity={0.7}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>

      <View style={styles.stockBadge}>
        <Text style={styles.stockText}>{item.stock} un</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      
      {/* TOPO */}
      <View style={[styles.header, { paddingTop: insets.top + 20 }]}>
        <Text style={styles.headerTitle}>Meu Estoque</Text>
        
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Search color="#666" size={18} />
            <TextInput 
              placeholder="Buscar..." 
              style={styles.input}
              value={search}
              onChangeText={setSearch}
            />
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Filter color="white" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* LISTA DE PLANTAS */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={[
          styles.listContent, 
          { paddingBottom: insets.bottom + 100 }
        ]}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity 
        style={[styles.fab, { bottom: insets.bottom + 20 }]}
        activeOpacity={0.8}
      >
        <Plus color="white" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#F8F9FA' 
  },
  header: {
    backgroundColor: '#2D5A27',
    paddingHorizontal: 20,
    paddingBottom: 25,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  searchRow: { 
    flexDirection: 'row',
    alignItems: 'center' 
  },
  searchBox: {
    flex: 1, 
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    height: 45,
  },
  input: { 
    flex: 1, 
    marginLeft: 8, 
    fontSize: 16,
    height: '100%' 
  },
  filterBtn: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    height: 45,
    width: 45,
    borderRadius: 12,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: { 
    padding: 20 
  },
  productItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  productImage: { 
    width: 55, 
    height: 55, 
    borderRadius: 10,
    backgroundColor: '#EEE' 
  },
  productInfo: { 
    flex: 1,
    paddingHorizontal: 12 
  },
  productName: { 
    fontSize: 15, 
    fontWeight: '700', 
    color: '#1A1A1A' 
  },
  productPrice: { 
    fontSize: 13, 
    color: '#2D5A27', 
    marginTop: 2, 
    fontWeight: '600' 
  },
  stockBadge: { 
    backgroundColor: '#F0F4F0', 
    paddingHorizontal: 10, 
    paddingVertical: 6, 
    borderRadius: 8 
  },
  stockText: { 
    color: '#2D5A27', 
    fontSize: 12, 
    fontWeight: '800' 
  },
  fab: {
    position: 'absolute',
    right: 20,
    backgroundColor: '#2D5A27',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});