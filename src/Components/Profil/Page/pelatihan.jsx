import React from 'react'
import { useStore } from '../../../feature'
import './pendidikan.css'

const Pelatihan = (isReady) => {
  const [state] = useStore()
  return (
    <>
    <div className={`pendidikan`}>
      <div className="contentPendidikan">
        <p className={` ${state.thema ? 'text-glass' : ''}`}>Beberapa Pelatihan yang sudah saya ikuti guna ingin mengejar impian saya sebagai expert Web Developer suatu saat nanti.
            Pelatihan yang sudah saya ikuti seperti <strong>Digital Talent Kominfo</strong>, <strong>Dicoding</strong>, <strong>IDCamp</strong>, pelatiha tersebut seputar Web Developer seperti <strong>BackEnd Node Js 2022</strong>, <strong>JavaScript Lanjutan</strong> dan <strong>React Js</strong> 
        </p>
      </div>
    </div>
    </>
  )
}

export default Pelatihan