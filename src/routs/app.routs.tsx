import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components';

import { Home } from '../screens/Home';
import { Register } from '../screens/Register';
import { Report } from '../screens/Report';
import { RFValue } from 'react-native-responsive-fontsize';


const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){
    const theme = useTheme();

    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarLabelStyle: {
                    fontFamily: theme.fonts.medium,
                    fontSize: RFValue(12)
                },
                tabBarStyle: {
                    height: 75
                }
            }}
        >
            <Screen
                name='Listagem'
                component={Home}
                options={{
                    tabBarIcon: (({ color, size }) =>
                        <MaterialIcons
                            name='format-list-bulleted'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
                
            <Screen
                name='Cadastrar'
                component={Register}
                options={{
                    tabBarIcon: (({ color, size }) =>
                        <MaterialIcons
                            name='attach-money'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Screen
                name='Relatório'
                component={Report}
                options={{
                    tabBarIcon: (({ color, size }) =>
                        <MaterialIcons
                            name='pie-chart'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Navigator>
    )
}