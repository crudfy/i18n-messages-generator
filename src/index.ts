export interface IData {
  [key: string]: any
}
function addFileTranslations(parts: any, langs: any, data: any) {
  parts.forEach((key: string, i: number) => {
    if (!langs[key]) {
      langs[key] = {}
      if (parts.length === 1) {
        langs[key] = data
      }
    }
    parts.splice(i, 1)
    addFileTranslations(parts, langs[key], data)
  })
}
export function buildLangFile(requireLangFile: any) {
  const langs: IData = {}
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

        addFileTranslations(filenameParts, langs, langFile)

      })

  return langs
}
