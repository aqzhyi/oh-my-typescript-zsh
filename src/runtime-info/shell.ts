#!/usr/bin/env zx
import { createRuntimeInfo } from '../utils/createRuntimeInfo'
import { $ } from 'zx'

export const shell = createRuntimeInfo(async () => {
  const { stdout: zshVersion } = await $`zsh --version`

  return {
    name: 'shell',
    version: /zsh (?<shellVersion>[\d.]+\s([(][\w\d-.]+[)]))/i.exec(zshVersion)?.groups?.['shellVersion'],
    emoji: '🔋',
  }
})
