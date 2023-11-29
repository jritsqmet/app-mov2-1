import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Welcome from "../screens/Welcome";
import Galeria from "../screens/Galeria";

const Tab= createMaterialBottomTabNavigator();

function MyTabs(){
    return(
    <Tab.Navigator>
        <Tab.Screen name= 'Welcome' component={Welcome} />
        <Tab.Screen name= 'Galeria' component={Galeria} /> 

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

