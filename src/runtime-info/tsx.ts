#!/usr/bin/env zx
import { createRuntimeInfo } from '../utils/createRuntimeInfo'
import { $ } from 'zx'

export const tsx = createRuntimeInfo(async () => {
  const { stdout: tsxVersion } = await $`tsx -v`

  return {
    name: 'tsx',
    version: /tsx v(?<tsxVersion>[\d.]+)/i.exec(tsxVersion)?.groups?.['tsxVersion'],
    emoji: '🛠️',
  }
})
