import { AppBar, TextField } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import PrimarySearchAppBar from '../Components/Appbar'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <PrimarySearchAppBar/>
    </div>
  )
}
