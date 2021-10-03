import React, { useState } from 'react'
import { Input, Button } from '@material-ui/core'
import styles from './AddCommentForm.module.scss'

interface AddCommentFormProps {}

const AddCommentForm: React.FC<AddCommentFormProps> = () => {
  const [clicked, setClicked] = useState(false)
  const [text, setText] = useState('')

  const onAddComment = () => {
    setClicked(false)
    setText('')
  }

  return (
    <div className={styles.form}>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        onFocus={() => setClicked(true)}
        classes={{ root: styles.inputField }}
        placeholder='Написать комментарий..'
        fullWidth
        multiline
        minRows={clicked ? 5 : 1}
      />
      {clicked && (
        <Button
          onClick={onAddComment}
          className={styles.addButton}
          variant='contained'
          color='primary'
        >
          Опубликовать
        </Button>
      )}
    </div>
  )
}

export default AddCommentForm
