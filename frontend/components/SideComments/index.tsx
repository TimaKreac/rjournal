import React, { useState } from 'react'
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined'

import CommentItem from './CommentItem'
import styles from './SideComments.module.scss'
import { comments } from '../../data'
import clsx from 'clsx'

export const SideComments = () => {
  const [visible, setVisible] = useState(true)

  const toggleVisible = () => setVisible(!visible)

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible &&
        comments.popular.map((obj) => <CommentItem {...obj} key={obj.id} />)}
    </div>
  )
}
