import React from 'react'

import ReactLoading from 'react-loading'
import Center from 'react-center'

const style = {
  loader: {
    position: 'absolute',
    top: '30%',
  }
}

export const loading = () => (
  <Center>
    <div style={style.loader}>
      <ReactLoading type="bars" color="#444" />
    </div>
  </Center>
)
