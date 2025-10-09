#!/usr/bin/env zsh
import { createRuntimeInfo } from '../utils/createRuntimeInfo'
import { $ } from 'zx'

export const pwd = createRuntimeInfo(async () => {
  const { stdout: currentPwd } = await $`pwd`

  return {
    name: 'pwd',
    version: currentPwd.trim(),
    emoji: '📁',
  }
})
