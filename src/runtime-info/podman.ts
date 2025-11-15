#!/usr/bin/env zx
import { createRuntimeInfo } from '../utils/createRuntimeInfo'
import { $ } from 'zx'

export const podman = createRuntimeInfo(async () => {
  const { stdout: tsxVersion } = await $`podman -v`

  return {
    name: 'podman',
    version: /podman version (?<podmanVersion>[\d.]+)/i.exec(tsxVersion)?.groups?.['podmanVersion'],
    emoji: '🐳',
  }
})
