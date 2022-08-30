import { exec } from 'child_process'

export function playMidi(file: string) {
  const windowsSystem = true;
  if (windowsSystem) {
    exec(file)
  } else {
    exec(`timidity ${file}`)
  }
}
