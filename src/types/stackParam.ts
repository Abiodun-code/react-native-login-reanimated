import { NativeStackScreenProps } from "@react-navigation/native-stack"


export type RootStack = {
  Login: undefined
}

export type LoginStack = NativeStackScreenProps<RootStack, "Login">