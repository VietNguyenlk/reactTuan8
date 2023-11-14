import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Stack = createNativeStackNavigator();

function home(){
  var [data,setData] = useState([]);
  var [data2,setData2] = useState([]);
  useEffect(()=>{
    fetch('https://653f25b39e8bd3be29e0007b.mockapi.io/huy')
    .then(response => response.json())
    .then(json =>{
      setData(json);

    });

  },[]);

  // useEffect(()=>{
  //   fetch('https://653f25b39e8bd3be29e0007b.mockapi.io/huy')
  //   .then(response => response.json())
  //   .then(json =>{
  //     setData2(json);

  //   });

  // },[]);


const handlePinkDonutPress = () => {
  // setData2([...data2]);
  fetch('https://653f25b39e8bd3be29e0007b.mockapi.io/huy')
  .then(response => response.json())
  .then(json => {
    setData2(json);
  });
};



  return(
    <View >
        <View style={{marginTop:10,marginLeft:20}}>
          <Text style={{fontSize:16}}>Welcome, Jala</Text>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Choice your best food</Text>

          <TextInput placeholder='Search food' style={{height:50,width:'70%',borderColor:'black',borderWidth:1,marginTop:30}} />
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30 }}>
          <TouchableOpacity style={{borderColor:'black',borderWidth:1,width:100,height:40,alignItems:'center'}}> <Text style={{fontSize:16,fontWeight:'bold'}}>Donut</Text> </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlePinkDonutPress()}
           style={{borderColor:'black',borderWidth:1,width:100,height:40,alignItems:'center'}}><Text style={{fontSize:16,fontWeight:'bold'}}>Pink Donut</Text> </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'black',borderWidth:1,width:100,height:40,alignItems:'center'}}> <Text style={{fontSize:16,fontWeight:'bold'}}>Floating Donut</Text> </TouchableOpacity>

        </View>

        <View style={styles.container}>

          {
             data.map((item) => {
              return(
                               
                    <Text>{item.name}</Text>
             
              )
          })
          }
        </View>


        {data2.length > 0 && (
        <View style={styles.container}>
          {data2.map((item) => (
            <Text key={item.id} style={{ fontSize: 24 }}>
              {item.name}
            </Text>
          ))}
        </View>
      )}

        


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
