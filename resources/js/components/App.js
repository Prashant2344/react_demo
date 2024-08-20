import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import configureStore from '../store/store'
import { Provider } from 'react-redux'

const store = configureStore()

createInertiaApp({
  resolve: name => require(`../modules/${name}`),
  setup({ el, App, props }) {
    render(
      <Provider store={store}>
        <App {...props} />
      </Provider>, el)
  },
})
