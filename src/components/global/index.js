import Vue from 'vue';
import {upperFirst, camelCase} from 'lodash';

const requireComponent = require.context(
  './',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(filename => {
  const componentConfig = requireComponent(filename)
  const componentName = upperFirst(
    camelCase(
      filename
      .split('/')
      .pop()
      .replace(/\.\w+$/, '')
    )
  )
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})
