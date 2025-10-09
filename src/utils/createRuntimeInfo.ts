import type { RuntimeInfo } from '../types/RuntimeInfo'

export function createRuntimeInfo(callback: () => Promise<RuntimeInfo>): Promise<RuntimeInfo> {
  return callback()
}
