#!/usr/bin/env zx
import { createRuntimeInfo } from '../utils/createRuntimeInfo'
import { $ } from 'zx'

export const turbo = createRuntimeInfo(async () => {
  const { stdout: turboVersion } = await $`turbo --version`

  return {
    name: 'turbo',
    version: /(?<turboVersion>[\d.]+)/i.exec(turboVersion)?.groups?.['turboVersion'],
    emoji: '🛠️',
  }
})
