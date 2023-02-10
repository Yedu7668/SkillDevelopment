import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';

import auth from '@react-native-firebase/auth';

const App = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [confirmation,setConfirmation] = useState(null)
  const [otp,setOtp] = useState('')

  const sendOtp = async (mobileNumber: string) => {
    try{
    const confirmation = await auth().signInWithPhoneNumber(mobileNumber);
    setIsOtpSent(true)
    setConfirmation(confirmation)
    }catch(error){
      console.error(error)
    }
    
  };

  return (
    
    <SafeAreaView
    style={{
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{fontSize: 24, fontWeight: '500', color: '#000'}}>
      Otp
    </Text>
    <TextInput
      style={{
        borderWidth: 1,
        borderColor: 'blue',
        height: 40,
        width: '80%',
        marginVertical: 16,
      }}
      placeholder="Otp"
      value={otp}
      onChangeText={setOtp}
      keyboardType="numeric"
    />
    <Button
      title="Send Otp"
      onPress={() => {
        sendOtp(`+91 ${mobileNumber}`);
      }}
    />
  </SafeAreaView>
  );
};

export default App;
