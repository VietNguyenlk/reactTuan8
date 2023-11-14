import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Stack = createNativeStackNavigator();

function home(){
  return(
    <View >
        <View style={{marginTop:10,marginLeft:20}}>
          <Text style={{fontSize:16}}>Welcome, Jala</Text>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Choice your best food</Text>

          <TextInput placeholder='Search food' style={{height:50,width:'70%',borderColor:'black',borderWidth:1,marginTop:30}} />
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30 }}>
          <TouchableOpacity style={{borderColor:'black',borderWidth:1,width:100,height:40,alignItems:'center'}}> <Text style={{fontSize:16,fontWeight:'bold'}}>Donut</Text> </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'black',borderWidth:1,width:100,height:40,alignItems:'center'}}><Text style={{fontSize:16,fontWeight:'bold'}}>Pink Donut</Text> </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'black',borderWidth:1,width:100,height:40,alignItems:'center'}}> <Text style={{fontSize:16,fontWeight:'bold'}}>Floating Donut</Text> </TouchableOpacity>

        </View>

        


    </View>


  )
};


export default function App() {
  
  return (
   <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name='home' component={home}/>
          
        
      </Stack.Navigator>

   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
