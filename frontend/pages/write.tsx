import React from 'react'
import { NextPage } from 'next'
import { TextField } from '@material-ui/core'
import { MainLayout } from '../layouts/MainLayout'
import WriteForm from '../components/WriteForm'

const Write: NextPage = () => {
  return (
    <MainLayout className='main_layout_white' hideComments hideMenu>
      <WriteForm></WriteForm>
    </MainLayout>
  )
}

export default Write
