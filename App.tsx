import { ScreenContent } from '~/components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

import './global.css';

const queryClient = new QueryClient()
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function HomeScreen() {
  return   <ScreenContent title="Home" path="App.tsx"></ScreenContent>
}

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ScreenContent title="Home" path="App.tsx"></ScreenContent>
        <StatusBar style="auto" />
      </QueryClientProvider>
    </>
  );
}
