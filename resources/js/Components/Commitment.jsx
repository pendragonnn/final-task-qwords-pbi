import React from 'react'
import CommitmentAccordion from './CommitmentAccordion'
import TitleDescription from './TitleDescription'
import { Accordion } from 'flowbite-react';

export default function Commitment() {
  const commitmentData = [
    { title: 'Layanan 24/7', description: 'Tim Technical Support dan Customer Service Qwords siap membantu Anda selama 24 jam, 7 hari. Anda dapat menghubungi melalui Live chat, Call Center, dan Support Ticket.' },
    { title: 'Panduan Manual Lengkap', description: 'Qwords dilengkapi dengan halaman knowledge base berisi tutorial dan tips seputar pengelolaan website dan hosting. Dapat diakses dengan mudah dan solutif.' },
    { title: 'Up time 99.99%', description: 'Uptime Network & Server di atas 99. 99% dengan konfigurasi server yang tepat. Didukung manajemen jaringan dan multiple upstream tier 1 provider network serta multiple peering.' },
    { title: 'Jaminan Keamanan', description: 'Keamanan menjadi fokus utama kami di Qwords. Tindakan pemantauan dan pencegahan yang berstandar & berkelanjutan telah menjadi perhatian utama kami.' },
    { title: 'Clustered DNS', description: 'DNS Server Cloud Hosting Qwords terhubung satu dengan yang lainnya. Hal ini membuat DNS Server akan selalu dapat di akses karena saling membackup antar server.' },
    { title: 'High Enterprise Server', description: 'Standar server Qwords adalah server kelas enterprise Dual Xeon Octa Core yang merupakan hardware kelas terbaik. Hardware ini biasa digunakan oleh perusahaan terkemuka.' },
    { title: 'Tier 1 Network', description: 'Tier 1 Network merupakan jaringan dunia tanpa transit network, yang membuat jaringan lebih cepat serta jalur routing yang lebih pendek dan ketersediaan backup network.' },
    { title: 'Peering Network', description: 'Jaringan di Qwords terhubung langsung ke public peering seperti OpenIXP dan CDIX yang membuat latency atau waktu tunggu pengiriman data semakin kecil.' },
  ]

  const commitmentDataFirst = commitmentData.slice(0, 4)
  const commitmentDataSecond = commitmentData.slice(4, 8)
  return (
    <section>
      {/* title and description */}
      <TitleDescription title='Komitmen Qwords' description='Berbagai alasan mengapa pelanggan memilih sewa hosting di Qwords' />

      {/* accordion commitment */}
      <div className='grid md:grid-cols-2 grid-cols-1 px-5 lg:gap-3'>
        <div className=''>
          {commitmentDataFirst.map((commitment) => (
            <CommitmentAccordion commitmentData={commitment} />
          ))}
        </div>
        <div className=''>
          {commitmentDataSecond.map((commitment) => (
            <CommitmentAccordion commitmentData={commitment} />
          ))}
        </div>

      </div>
    </section>
  )
}
