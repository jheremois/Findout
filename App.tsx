import AppRoutes from '@src/router/app.routes'
import { AppStyles } from '@src/shared/styles/AppStyles'
import { AppColors } from '@src/shared/styles/AppDefaults'
import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

const App = ()=>{
  return(
    <>
      <SafeAreaView style={[{flex: 1}, AppStyles.bgBlack]}>
        <StatusBar
          animated={true}
          backgroundColor={AppColors.gray}/>
            <AppRoutes/>
      </SafeAreaView>
      {/* <Toast config={MyToastConfig} /> */}
    </>
  )
}

export default App