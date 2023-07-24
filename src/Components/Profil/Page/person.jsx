import React from 'react'
import { useStore } from '../../../feature'
import './pendidikan.css'

const Person = (isReady) => {
  const [state] = useStore()
  return (
    <>
    <div className={`pendidikan`}>
      <div className="contentPendidikan">
        <p className={` ${state.thema ? 'text-glass' : ''}`}>Hallo, Nama Saya Arsat Teguh Maulana saya baru saja menyelesaikan pendidikan Strata 1 saya Pada akhir tahun 2021, kesibukan saya saat ini tengah mengikuti berbagai macam <strong>pelatihan </strong> agar meningkatkan kemampuan saya dalam dunia Web. Serta saya juga tergabung dalam <strong>komunitas Biola dan Seniman Medan</strong> dimana komunitas tersebut lebih kearah Learning seputar dunia musik dan beberapa kegiatan amal seperti melakukan konser mini untuk kaum dhuafa. Sekarang ini saya berdomisili di <strong>Kota Medan</strong>.
        </p>
      </div>
    </div>
    </>
  )
}

export default Person