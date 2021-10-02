import React, { useEffect } from 'react'
import EditorJS from '@editorjs/editorjs'

interface EditorProps {}

const Editor: React.FC<EditorProps> = () => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Введите текст вашей статьи..',
    })

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy()
        })
        .catch((error) => console.error('ERROR editor cleanup', error))
    }
  }, [])

  return <div id='editor' />
}

export default Editor
