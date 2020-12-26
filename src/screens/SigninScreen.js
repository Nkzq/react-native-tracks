import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'

import { Context as AuthContext } from '../context/AuthContext'
import Spacer from '../components/Spacer'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <Spacer>
        <AuthForm
          headerText="Sign in to Track"
          errorMessage={state.errorMessage}
          onSubmit={signin}
          submitLabel="Sign In"
        />
        <NavLink
          route="Signup"
          label="Don't have an account ? Sign up instead"
        />
      </Spacer>
    </View>
  )
}

SigninScreen.navigationOptions = () => ({
  headerShown: false,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
  },
})

export default SigninScreen