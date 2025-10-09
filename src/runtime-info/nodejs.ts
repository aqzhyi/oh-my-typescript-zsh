#!/usr/bin/env zx
import { createRuntimeInfo } from '../utils/createRuntimeInfo'
import { $ } from 'zx'

export const nodejs = createRuntimeInfo(async () => {
  const { stdout: nodeVersion } = await $`node -v`

  return {
    name: 'node',
    version: /v(?<nodeVersion>[\d.]+)/i.exec(nodeVersion)?.groups?.['nodeVersion'],
    emoji: '🔋',
  }
})
