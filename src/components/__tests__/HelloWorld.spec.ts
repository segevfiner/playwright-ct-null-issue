import { test } from '@playwright/experimental-ct-vue'
import HelloWorld from '../HelloWorld.vue'

test('HelloWorld', async ({ mount }) => {
  const component = await mount(HelloWorld, {
    props: {
      msg: null
    }
  })
})
