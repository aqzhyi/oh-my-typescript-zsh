#!/usr/bin/env zx
import { createRuntimeInfo } from '../utils/createRuntimeInfo'
import { $ } from 'zx'

export const pnpm = createRuntimeInfo(async () => {
  const { stdout: pnpmVersion } = await $`pnpm -v`

  return {
    name: 'pnpm',
    version: /(?<pnpmVersion>[\d.]+)/i.exec(pnpmVersion)?.groups?.['pnpmVersion'],
    emoji: '📦',
  }
})
