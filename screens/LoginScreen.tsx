import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {widthToDP as wp, heightToDP as hp} from "react-native-responsive-screens"

const LoginScreen = () => {
  return (
    <View className="bg-white flex-1">
      {/* background image */}
      <View className='absolute flex-1 w-full'>
        <Image className='w-full -z-50' style={{ height: hp(100) }} source={require("../assets/image/background.png")} />
      </View>
      {/* light image */}
      <View className='flex-row justify-around '>
        <Image source={require("../assets/image/light.png")} style={{ height: hp(30), width: wp(25) }} />
        <Image source={require("../assets/image/light.png")} style={{ height: hp(20), width: wp(17) }} />
      </View>
      {/* title */}
      <View className='flex items-center pt-10'>
        <Text className='text-4xl font-bold tracking-wider text-white'>Login</Text>
      </View>
      {/* forms */}
      <View className=' pt-24'>
        <ScrollView showsVerticalScrollIndicator={false} className='space-y-5 mx-3'>
          {/* login input */}
          <View className='bg-black/5 rounded-xl p-4'>
            <TextInput placeholder='email' placeholderTextColor={"gray"} />
          </View>
          {/* password input */}
          <View className='bg-black/5 rounded-xl p-4'>
            <TextInput placeholder='password' placeholderTextColor={"gray"} secureTextEntry />
          </View>
          {/* login button */}
          <TouchableOpacity className='bg-sky-400 p-4 rounded-xl' activeOpacity={0.6}>
            <Text className='text-center font-bold tracking-wide text-white'>Login</Text>
          </TouchableOpacity>
          {/* account */}
          <View className='flex-row space-x-2 items-center justify-center'>
            <Text>Dont have an account?</Text>
            <TouchableOpacity activeOpacity={0.6}>
              <Text className='text-sky-400'>SignUp</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})