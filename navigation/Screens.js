import { Animated, AsyncStorage, Dimensions, Easing } from 'react-native';
// header for screens
import { Header, Icon } from '../components';
import { nowTheme, tabs } from '../constants';

import Articles from '../screens/Articles';
import { Block } from 'galio-framework';
import Components from '../screens/Components';
// drawer
import CustomDrawerContent from './Menu';
// screens
import Home from '../screens/Home';
import Onboarding from '../screens/Onboarding';
import Pro from '../screens/Pro';
import Profile from '../screens/Profile';
import React, { useEffect } from 'react';
import Register from '../screens/Register';
import SettingsScreen from '../screens/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ApplyFine from '../screens/ApplyFine';

const { width } = Dimensions.get('screen');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ApplyFineStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Aplicar Multa"
      screenOptions={{
        mode: 'card',
        headerShown: 'screen',
      }}
    >
      <Stack.Screen
        name="Aplicar Multa"
        component={ApplyFine}
        options={{
          header: ({ navigation, scene }) => (
            <Header transparent title="Aplicar Multa" navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function ComponentsStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Mapa de Multas"
      screenOptions={{
        mode: 'card',
        headerShown: 'screen',
      }}
    >
      <Stack.Screen
        name="Mapa de Multas"
        component={Components}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Mapa de Multas" navigation={navigation} scene={scene} />
          ),
          backgroundColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
}

function ArticlesStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Tipos de Multas"
      screenOptions={{
        mode: 'card',
        headerShown: 'screen',
      }}
    >
      <Stack.Screen
        name="Tipos de Multas"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Tipos de Multas" navigation={navigation} scene={scene} />
          ),
          backgroundColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
}

function AccountStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{
        mode: 'card',
        headerShown: 'screen',
      }}
    >
      <Stack.Screen
        name="Account"
        component={Register}
        options={{
          header: ({ navigation, scene }) => (
            <Header transparent title="Crear Cuenta" navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Consultas"
      screenOptions={{
        mode: 'card',
        headerShown: 'screen',
      }}
    >
      <Stack.Screen
        name="Consultas"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header transparent white title="Consultas" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" back white transparent navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: 'card',
        headerShown: 'screen',
      }}
    >
      <Stack.Screen
        name="Multas Registradas"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Multas Registradas" search options navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" back white transparent navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: nowTheme.COLORS.PRIMARY,
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: nowTheme.COLORS.WHITE,
        inactiveTintColor: nowTheme.COLORS.WHITE,
        activeBackgroundColor: 'transparent',
        itemStyle: {
          width: width * 0.75,
          backgroundColor: 'transparent',
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: 'normal',
        },
      }}
      initialRouteName="Multas Registradas"
    >
      <Drawer.Screen
        name="Multas Registradas"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Mapa de Multas"
        component={ComponentsStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Tipos de Multas"
        component={ArticlesStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Consultas"
        component={ProfileStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Registrarme"
        component={AccountStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Crear Cyebta"
        component={ApplyFineStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Aplicar Multa"
        component={ApplyFineStack}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack(props) {
  useEffect(() => {
    console.log('hello world');
    const fines = AsyncStorage.getItem('fines');
    if (!fines) {
      AsyncStorage.setItem('fines', '[]');
    }
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        mode: 'card',
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
