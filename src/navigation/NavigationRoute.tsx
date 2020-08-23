import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

function MeetingChats() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Meetings & Chats</Text>
    </View>
  );
}

// Settings
function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings</Text>
    </View>
  );
}

// Meetings
function Meetings() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Meetings</Text>
    </View>
  );
}

// Contacts
function Contacts() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Contacts</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function NavigationRoute() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarLabel: 'Meetings & Chats',
            tabBarIcon: ({color}) => (
              <Icon name="md-chatboxes" color={color} size={26} />
            ),
          }}
          name="MeetingsChats"
          component={MeetingChats}
        />

        <Tab.Screen
          options={{
            tabBarLabel: 'Meetings',
            tabBarIcon: ({color}) => (
              <Icon name="md-videocam" color={color} size={26} />
            ),
          }}
          name="Meetings"
          component={Meetings}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Contacts',
            tabBarIcon: ({color}) => (
              <Icon name="md-contacts" color={color} size={26} />
            ),
          }}
          name="Contacts"
          component={Contacts}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color}) => (
              <Icon name="md-settings" color={color} size={26} />
            ),
          }}
          name="Settings"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationRoute;
