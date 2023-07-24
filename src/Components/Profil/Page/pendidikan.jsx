import React from 'react'
import { useStore } from '../../../feature'
import './pendidikan.css'

const Pendidikan = (isReady) => {
  const [state] = useStore()
  return (
    <>
    <div className={`pendidikan`}>
      <div className="contentPendidikan">
        <p className={` ${state.thema ? 'text-glass' : ''}`}>Saya Seorang Lulusan Baru pada akhir tahun 2021,
            di salah satu kampus di kota Medan STMIK TRIGUNA DHARMA. Jurusan yang saya ambil yaitu Sistem Informasi dan sekarang ini saya sedang memperdalam Web Developer.
        </p>
      </div>
    </div>
    </>   
  )
}

export default Pendidikan