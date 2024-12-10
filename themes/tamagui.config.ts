import { createTamagui } from '@tamagui/core'
import * as themes from './theme-output'
import { tokens } from '@tamagui/config/v3'

export const customConfig = createTamagui({
  tokens,
  themes
})
