import { Tabs } from 'expo-router';
import { Home, Package, BarChart3, Settings } from 'lucide-react-native';
import { SafeAreaListener, SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabLayout() {
  return (
    <SafeAreaProvider>
        <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#2D5A27',
            tabBarInactiveTintColor: '#999',
            headerShown: false,
            tabBarStyle: {
            height: 70,
            paddingBottom: 10,
            paddingTop: 10,
            borderTopWidth: 1,
            borderTopColor: '#F0F0F0',
            elevation: 0, 
            shadowOpacity: 0, 
            },
            tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
            },
        }}
        >
        <Tabs.Screen
            name="index"
            options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Home color={color} size={24} />,
            }}
        />
        <Tabs.Screen
            name="inventory" 
            options={{
            title: 'Estoque',
            tabBarIcon: ({ color }) => <Package color={color} size={24} />,
            }}
        />
        </Tabs>
    </SafeAreaProvider>
  );
}