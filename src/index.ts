export interface IData {
  [key: string]: any
}
function addFileTranslations(parts: any, messages: any, data: any) {
  parts.forEach((key: string, i: number) => {
    if (!messages[key]) {
      messages[key] = {}
      if (parts.length === 1) {
        messages[key] = data
      }
    }
    parts.splice(i, 1)
    addFileTranslations(parts, messages[key], data)
  })
}
export function buildLangFiles(requireLangFile: any) {
  const messages: IData = {}
  requireLangFile
      .keys()
      .filter((it: string) => {
        // @ts-ignore
        return ['ts', 'js'].includes(it.split('.').reverse()[0])
      })
      .map((fileName: string) => {
        const langFile = requireLangFile(fileName).default || {}
        const filename: string = fileName.replace('./', '')
        const filenameParts: any = filename.split('/').filter((it) => {
          return it !== 'index.ts' && it !== 'index.js'
        }).map(it => {
          return it.replace('.js', '').replace('.ts', '')
        })

        addFileTranslations(filenameParts, messages, langFile)

      })

  return messages
}
