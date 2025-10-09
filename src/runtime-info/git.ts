#!/usr/bin/env zx
import { createRuntimeInfo } from '../utils/createRuntimeInfo'
import { $ } from 'zx'

export const git = createRuntimeInfo(async () => {
  const { stdout: gitVersion } = await $`git --version`

  return {
    name: 'git',
    version: /git version (?<gitVersion>[\d.]+)/i.exec(gitVersion)?.groups?.['gitVersion'],
    emoji: '🌎',
  }
})
