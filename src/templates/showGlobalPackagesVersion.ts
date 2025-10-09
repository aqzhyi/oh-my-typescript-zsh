#!/usr/bin/env zx
import dedent from 'dedent'
import { echo } from 'zx'
import { git } from '../runtime-info/git'
import { nodejs } from '../runtime-info/nodejs'
import { shell } from '../runtime-info/shell'
import { turbo } from '../runtime-info/turbo'
import { tsx } from '../runtime-info/tsx'
import type { RuntimeInfo } from '../types/RuntimeInfo'
import { pnpm } from '../runtime-info/pnpm'

const infoSet = new Set((await Promise.all([shell, nodejs, git, pnpm, tsx, turbo])).map(format))

echo(
  dedent(`
    🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
    ${Array.from(infoSet).join('\n')}
    🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
    `).replace(/\n\n/g, '\n'),
)

function format(info: RuntimeInfo) {
  const emoji = info.emoji ? info.emoji.padEnd(2) : 'ℹ️'
  const name = info.name ? info.name.padEnd(5) : ''
  const value = info.value ? info.value.padEnd(10) : ''
  const version = info.version ? `@ v${info.version}` : ''

  return `${emoji} ${name} ${value} ${version}`
}
