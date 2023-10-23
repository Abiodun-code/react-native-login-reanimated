import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {widthToDP as wp, heightToDP as hp} from "react-native-responsive-screens"
import { LoginStack } from '../src/types/stackParam'
import Animated, {FadeInUp, FadeOut} from "react-native-reanimated"

const LoginScreen = ({navigation}: LoginStack) => {
  return (
    <View className="bg-white flex-1">
      {/* background image */}
      <View className='absolute w-full'>
        <Image className='w-full -z-50' style={{ height: hp(100) }} source={require("../assets/image/background.png")} />
      </View>
      {/* light image */}
      <View className='flex-row justify-around '>
        <Animated.Image 
        entering={FadeInUp.delay(200).duration(1000).springify()}
         source={require("../assets/image/light.png")} style={{ height: hp(30), width: wp(25) }} 
         />
        <Animated.Image
        entering={FadeInUp.delay(400).duration(1000).springify()}
        source={require("../assets/image/light.png")} style={{ height: hp(20), width: wp(17) }} 
        />
      </View>
      {/* title */}
      <View className='flex items-center pt-10'>
        <Text className='text-4xl font-bold tracking-wider text-white'>Login</Text>
      </View>
      {/* forms */}
      <ScrollView showsVerticalScrollIndicator={false} className='space-y-5 mx-3 mt-24'>
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
          <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate("Sign")}>
            <Text className='text-sky-400'>SignUp</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})