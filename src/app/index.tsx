import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  StatusBar 
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { 
  DollarSign, 
  ShoppingCart, 
  Package, 
  BarChart3, 
  Bell, 
  User 
} from 'lucide-react-native';

import StatCard from '../components/StatCard';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import ActionButton from '../components/ActionButton';

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ flexGrow: 1, paddingBottom: insets.bottom + 20 }}
        style={styles.scrollView}
      >
        
        {/* TOPO */}
        <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
          <View style={styles.topBar}>
            <View style={styles.iconButton}>
              <Bell color="white" size={22} />
            </View>
            <View style={[styles.iconButton, { marginLeft: 12 }]}>
              <User color="white" size={22} />
            </View>
          </View>
          
          <Text style={styles.welcome}>Olá,</Text>
          <Text style={styles.userName}>Larissa Monsalve</Text>
          
          {/* ESTATISTICAS */}
          <View style={styles.statsGrid}>
            <StatCard 
              title="Receita Total" 
              value="R$ 24.8k" 
              percentage="+12.5%" 
              icon={DollarSign} 
            />
            <StatCard 
              title="Total Vendas" 
              value="1,248" 
              percentage="+8.2%" 
              icon={ShoppingCart} 
            />
          </View>
        </View>

        {/* MAIS VENDIDOS */}
        <View style={styles.body}>
          <SectionHeader title="Mais Vendidos" link="Ver todos" />
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.horizontalPadding}
          >
            <ProductCard name="Suculenta Mix" soldCount="156 vendidos" imageUrl="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400"/>
            <ProductCard name="Monstera Deliciosa" soldCount="134 vendidos" imageUrl="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400"/>
            <ProductCard name="Cacto de Mesa" soldCount="92 vendidos" imageUrl="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400"/>
          </ScrollView>

          <SectionHeader title="Ações Rápidas" />
          
          {/* AÇÕES RÁPIDA */}
          <View style={styles.actionsGrid}>
            <ActionButton 
              label="Novo Produto" 
              icon={Package} 
              onPress={() => console.log('Ação: Novo')}
            />
            <ActionButton 
              label="Ver Relatório" 
              icon={BarChart3} 
              onPress={() => console.log('Ação: Relatório')}
            />
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

{/*ESTILOS */}
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF' 
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#2D5A27',
    paddingHorizontal: 20,
    paddingBottom: 35,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconButton: {
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 12,
  },
  welcome: { 
    color: 'rgba(255,255,255,0.8)', 
    fontSize: 16,
    fontWeight: '400' 
  },
  userName: { 
    color: 'white', 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 25 
  },
  statsGrid: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '100%' 
  },
  body: {
    flex: 1, 
    marginTop: 5,
  },
  horizontalPadding: {
    paddingLeft: 20,
    paddingRight: 5,
  },
  actionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 5,
  },
});