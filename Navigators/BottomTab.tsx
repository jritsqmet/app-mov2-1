import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 





import Welcome from "../screens/Welcome";
import Galeria from "../screens/Galeria";
import CalculoScreen from "../screens/CalculoScreen";

const Tab= createMaterialBottomTabNavigator();

function MyTabs(){
    return(
    <Tab.Navigator>
        <Tab.Screen name= 'Welcome' component={Welcome} 
        />
        <Tab.Screen name= 'Galeria' component={Galeria} 
        options={{
            tabBarLabel:'Galería de Imágenes',
            tabBarIcon: ()=>(
                <MaterialCommunityIcons name="weather-sunny-alert"  size={30}  />
            )
        }}
        /> 
        <Tab.Screen name='Calculo' component={CalculoScreen}/>

    </Tab.Navigator>
    )
}

export default function TabNavigator(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}

