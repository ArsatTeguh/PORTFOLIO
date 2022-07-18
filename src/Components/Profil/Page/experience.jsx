import React from 'react'
import { useStore } from '../../../feature'
import './pendidikan.css'

const Experience = (isReady) => {
  const [state] = useStore()
  return (
    <>
    <div className={`pendidikan`}>
      <div className="contentPendidikan">
        <p className={` ${state.thema ? 'text-glass' : ''}`}>Pengalaman saya sebagai Web Developer hanya sebatas Freelance membuat Web Penjualan Mobil. Diluar dari Web Developer setelah selesai kuliah saya pernah bekerja di Perusahaan jasa pemberangkatan TKI ke Malasyia.
        </p>
      </div>
    </div>
    </>
  )
}

export default Experience