import React from 'react'

export default function Footer() {
  return (
    // <footer className="bg-orange-500">
    //   <div className="container-fluid">
    //     <div className="row d-flex h-100">
    //       <div className="col-12 col-lg-3">
    //         <div id="begin-logo" className="mb-5">
    //           <div className="qw-logo">
    //             <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/logo-dark.webp" alt="qwords.webp" width="190px" height="80" />
    //           </div>
    //           <div className="mt-3 mt-lg-4">
    //             <h4 className="fw-bold mb-3 mb-lg-4 h5home">
    //               PT Qwords Company International
    //             </h4>
    //             <p className="fw-light">
    //               Cloud Web Hosting Indonesia. Domain &amp; hosting terbaik dengan
    //               akses cepat yang didukung layanan support 24/7
    //             </p>
    //           </div>
    //           <a href="https://www.bsigroup.com/en-ID/validate-bsi-issued-certificates/client-directory-certificate/IS%20776219">
    //             <div className="qw-logo">
    //              <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/bsi.webp" alt="bsi.webp" width="395px" height="100px" />
    //             </div>
    //           </a>
    //         </div>
    //         <div id="#customer-care">
    //           <h4 className="fw-bold mb-3 mb-lg-4 h5home">Customer Care</h4>
    //           <ul className="list-unstyled">
    //             <li><a href="https://qwords.com/v2/order-payment">Pembayaran</a></li>
    //             <li><a href="https://qwords.com/v2/permintaan-faktur-pajak">Faktur Pajak</a></li>
    //             <li><a href="https://portal.qwords.com/submitticket.php">Bantuan 24 jam</a></li>
    //             <li><a href="https://qwords.com/v2/qwords-rewards">Qwords Rewards</a></li>
    //             <li><a href="https://kb.qwords.com">Knowledge Base</a></li>
    //             <li><a href="https://qwords.com/blog">Blog</a></li>
    //             <li><a href="https://qwords.com/v2/faq">FAQ</a></li>
    //             <li><a href="https://qwords.com/v2/about-qwordscom/contact-qwordscom">Kontak</a></li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="col-12 col-lg-3">
    //         <div id="aboutus" className="mb-5">
    //           <h4 className="fw-bold mb-3 mb-lg-4 h5home">Mengenai Kami</h4>
    //           <ul className="list-unstyled">
    //             <li><a href="https://qwords.co.id">Corporate Website</a></li>
    //             <li><a href="https://qwords.com/v2/about-qwordscom/history/">Qwords History</a></li>
    //             <li><a href="https://qwords.com/v2/about-qwordscom/difference/">Qwords Differences</a></li>
    //             <li><a href="https://qwords.com/v2/media-publication">Media Publication</a></li>
    //             <li><a href="https://qwords.com/v2/about-qwordscom/network/">Network &amp; Infrastructure</a></li>
    //             <li><a href="https://qwords.com/v2/about-qwordscom/partner/">Partner</a></li>
    //             <li><a href="https://qwords.com/v2/karir">Career &amp; Employment</a></li>
    //           </ul>
    //         </div>
    //         <div id="msa" className="mb-5">
    //           <h4 className="fw-bold mb-3 mb-lg-4 h5home">MSA/SLA/AUP</h4>
    //           <ul className="list-unstyled">
    //             <li><a href="https://qwords.com/v2/master-service-agreement">Master Service Agreement</a></li>
    //             <li><a href="https://qwords.com/v2/master-service-agreement/refund-policy">Refund Policy</a></li>
    //             <li><a href="https://qwords.com/v2/master-service-agreement/privacy-policy/">Privacy Policy</a></li>
    //             <li><a href="https://qwords.com/v2/master-service-agreement/product-life-cycle-policy/">Product Life Cycle Policy</a></li>
    //             <li><a href="https://qwords.com/v2/about-qwordscom/penggunaan-merek-dan-logo">Penggunaan Merek dan Logo</a></li>
    //             <li><a href="https://qwords.com/v2/migrasi-pelanggan">Migrasi Ke Qwords</a></li>
    //           </ul>
    //         </div>

    //       </div>
    //       <div className="col-12 col-lg-3">
    //         <div id="others" className="mb-5">
    //           <h4 className="fw-bold mb-3 mb-lg-4 h5home">Layanan Lainnya</h4>
    //           <ul className="list-unstyled">
    //             <li><a href="https://qwords.com/v2/services/extended-support">Extended Support</a></li>
    //             <li><a href="https://qwords.com/v2/manage-the-box-dedicated-colocation-server">Manage The Box Server</a></li>
    //             <li><a href="https://qwords.com/v2/flexi-main-domain">Flexi Main Domain</a></li>
    //             <li><a href="https://qwords.com/v2/ftp-backup">FTP Backup</a></li>
    //             <li><a href="https://qwords.com/v2/services/offline-backup">Offline Backup</a></li>
    //             <li><a href="https://qwords.com/v2/services/hosting-insurance">Hosting Insurance</a></li>
    //             <li><a href="https://qwords.com/v2/licenses">Software License</a></li>
    //             <li><a href="https://qwords.com/v2/services/digital-signature">Digital Signature</a></li>
    //           </ul>
    //         </div>
    //         <div id="resellerservice" className="mb-5">
    //           <h4 className="fw-bold mb-3 mb-lg-4 h5home">Layanan Reseller</h4>
    //           <ul className="list-unstyled">
    //             <li><a href="https://qwords.com/v2/afiliasi">Afiliasi</a></li>
    //             <li><a href="https://qwords.com/v2/qwordscom-package-reseller">Qwords VIP Partner</a></li>
    //             <li><a href="https://qwords.com/v2/private-label-hosting-reseller">Private Label Hosting Reseller</a></li>
    //             <li><a href="https://qwords.com/v2/private-label-domain-reseller">Private Label Domain Reseller</a></li>
    //           </ul>
    //         </div>
    //         <div id="resellerservice">
    //           <h4 className="fw-bold mb-3 mb-lg-4 h5home">Free Tools</h4>
    //           <ul className="list-unstyled">
    //             <li><a href="https://link.share.web.id/">Qwords Link-Q</a></li>
    //             <li><a href="https://wa.share.web.id/">WhatsApp Link Generator</a></li>
    //             <li><a href="https://qwords.info/">Network Tools</a></li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="col-12 col-lg-3">
    //         <div id="office">
    //           <div id="surabaya" className="mb-5">
    //             <h4 className="fw-bold mb-3 mb-lg-3 h5home">Kantor Surabaya</h4>
    //             <p>
    //               Gedung Bursa Efek Indonesia Lt.10, Jl. Taman AIS Nasution
    //               No.21, Surabaya 60271 - Indonesia 031 30008800
    //             </p>
    //           </div>
    //           <div id="yogya" className="mb-5">
    //             <h4 className="fw-bold mb-3 mb-lg-3 h5home">Kantor Yogyakarta</h4>
    //             <p>
    //               Jl. Blotan no. 18 Kayen Wedomartani, Ngemplak, Sleman,
    //               Yogyakarta 55584 - Indonesia 0274 6058800
    //             </p>
    //           </div>
    //           <div id="jakarta" className="mb-5">
    //             <h4 className="fw-bold mb-3 mb-lg-3 h5home">Kantor Jakarta</h4>
    //             <p>
    //               Gedung Cyber 1 Lantai 3,
    //               Jl.Kuningan Barat no.8,
    //               Jakarta 12710 - Indonesia
    //               021 39708800
    //             </p>
    //           </div>
    //           <div id="bandung" className="mb-5">
    //             <h4 className="fw-bold mb-3 mb-lg-3 h5home">Kantor Bandung</h4>
    //             <p>
    //               Jl. Terusan Setra Indah I No.19, Sukagalih, Sukajadi, Bandung
    //               40163 - Indonesia 022 30508800
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row d-flex h-100">
    //       <div className="col-12 col-lg-12">
    //         <div id="pse" className="my-5">
    //           <h4 className="fw-bold mb-5 mb-lg-12 h5home">Terdaftar di PSE, ICANN dan Partner Lainnya</h4>
    //           <div className="d-flex align-items-center flex-wrap">
    //             <a href="https://pse.kominfo.go.id/tdpse-detail/1447">
    //               <div className="me-3">
    //                 <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/code.webp" alt="code.webp" width="100%" height="100%" />
    //               </div>
    //             </a>
    //             <a href="https://www.icann.org/en/accredited-registrars?sort-direction=asc&amp;sort-param=name&amp;page=1&amp;iana-number=4029&amp;view-all=true">
    //               <div className="me-3">
    //                 <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/icann-logo.webp" alt="icann-logo.webp" width="100%" height="100%" />
    //               </div>
    //             </a>
    //             <div className="me-3">
    //               <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/badge_litespeed.svg" alt="badge_litespeed.svg" width="100px" height="100px" />
    //             </div>
    //             <div className="me-3">
    //               <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/badge_whmadmin.svg" alt="badge_whmadmin.svg" width="100px" height="100px"/>
    //             </div>
    //             <div className="me-3">
    //               <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/acronis-cloud-tech.webp" alt="acronis-cloud-tech.webp" width="100%" height="100%" />
    //             </div>
    //             <div className="me-3">
    //               <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/acronis-cloud-sales.webp" alt="acronis-cloud-sales.webp" width="100%" height="100%" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div  className="d-flex justify-content-center pb-3 pb-lg-0">
    //       <div className="row justify-content-center align-items-end mt-auto" id="end-footer">
    //         <div className="col-12 col-lg-auto pb-3">
    //           <div className="hstack gap-3 justify-content-center justify-content-lg-end">
    //             <a href="https://www.facebook.com/qwordsdotcom">
    //               <div className="social-icon">
    //                 <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Facebook.webp" alt="fb.webp" width="30px" height="30px" />
    //               </div>
    //             </a>
    //             <a href="https://www.instagram.com/qwordsdotcom/">
    //               <div className="social-icon">
    //                 <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Instagram.webp" alt="ig.webp" width="30px" height="30px" />
    //               </div>
    //             </a>
    //             <a href="https://twitter.com/qwordsdotcom">
    //               <div className="social-icon">
    //                 <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Twitter.webp" alt="twt.webp" width="30px" height="30px" />
    //               </div>
    //             </a>
    //             <a href="https://www.youtube.com/user/qwordsvideo">
    //               <div className="social-icon">
    //                 <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Youtube.webp" alt="yt.webp" width="30px" height="30px" />
    //               </div>
    //             </a>
    //           </div>
    //         </div>
    //         <div className="col-12 col-lg-auto mt-3 pb-3">
    //           <p className="mb-0 text-center">
    //             Copyright © <span id="yearFooter"></span> PT. Qwords Company International
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className='w-full h-fit bg-gray-700 p-10'>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
        {/* col-1 */}
        <div className='flex flex-col text-white gap-3 px-1'>
          <img className='w-1/2 md:w-3/4 lg:w-5/12' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/logo-dark.webp" alt="" />
          <h1 className='title-footer'>PT Qwords Company International</h1>
          <p>Cloud Web Hosting Indonesia. Domain & hosting terbaik dengan akses cepat yang didukung layanan support 24/7</p>
          <img className='w-1/2 md:w-3/4 lg:w-5/12' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/bsi.webp" alt="" />
          <h1 className='title-footer'>Customer Care</h1>
          <ul className='flex flex-col gap-2 '>
            <li><a href="">Pembayaran</a></li>
            <li><a href="">Faktur Pajak</a></li>
            <li><a href="">Bantuan 24 jam</a></li>
            <li><a href="">Qwords Rewards</a></li>
            <li><a href="">Knowledge Base</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Kontak</a></li>
          </ul>
        </div>

        {/* cols-2 */}
        <div className='flex flex-col text-white gap-3 px-1'>
          <h1 className='title-footer'>Mengenal Kami</h1>
          <ul className='flex flex-col gap-2'>
            <li><a href="">Corporate Website</a></li>
            <li><a href="">Qwords History</a></li>
            <li><a href="">Qwords Differences</a></li>
            <li><a href="">Media Publication</a></li>
            <li><a href="">Network & Infrastructure</a></li>
            <li><a href="">Partner</a></li>
            <li><a href="">Career & Employment</a></li>
          </ul>
          <h1 className='title-footer'>MSA/SLA/AUP</h1>
          <ul className='flex flex-col gap-2'>
            <li><a href="">Master Service Agreement</a></li>
            <li><a href="">Refund Policy</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Product Life Cycle Policy</a></li>
            <li><a href="">Penggunaan Merek dan Logo</a></li>
            <li><a href="">Migrasi Ke Qwords</a></li>
          </ul>
        </div>

        {/* col-3 */}
        <div className='flex flex-col text-white gap-3 px-1'>
          <h1 className='title-footer'>Layanan Lainnya</h1>
          <ul className='flex flex-col gap-2'>
            <li><a href="">Extended Support</a></li>
            <li><a href="">Manage The Box Server</a></li>
            <li><a href="">Flexi Main Domain</a></li>
            <li><a href="">FTP Backup</a></li>
            <li><a href="">Offline Backup</a></li>
            <li><a href="">Hosting Insurance</a></li>
            <li><a href="">Software Lisence</a></li>
            <li><a href="">Digital Signature</a></li>
          </ul>

          <h1 className='title-footer'>Layanan Reseller</h1>
          <ul className='flex flex-col gap-2'>
            <li><a href="">Afiliasi</a></li>
            <li><a href="">Qwords VIP Partner</a></li>
            <li><a href="">Private Label Hosting Reseller</a></li>
            <li><a href="">Private Label Domain Reseller</a></li>
          </ul>

          <h1 className='title-footer'>Free Tools</h1>
          <ul className='flex flex-col gap-2'>
            <li><a href="">Qwords Link-Q</a></li>
            <li><a href="">WhatsApp Link Generator</a></li>
            <li><a href="">Network Tools</a></li>
          </ul>
        </div>

        {/* col-4 */}
        <div className='flex flex-col text-white gap-3'>
          {/* address box */}
          <ul>
            <li className='flex flex-col gap-1'>
              <h1 className='title-footer'>Kantor Surabaya</h1>
              <p>Gedung Bursa Efek Indonesia Lt.10, Jl. Taman AIS Nasution No.21, Surabaya 60271 - Indonesia 031 30008800</p>
            </li>
            <li className='flex flex-col gap-1'>
              <h1 className='title-footer'>Kantor Yogyakarta</h1>
              <p>Jl. Blotan no. 18 Kayen Wedomartani, Ngemplak, Sleman, Yogyakarta 55584 - Indonesia 0274 6058800</p>
            </li>
            <li className='flex flex-col gap-1'>
              <h1 className='title-footer'>Kantor Jakarta</h1>
              <p>Gedung Cyber 1 Lantai 3, Jl.Kuningan Barat no.8, Jakarta 12710 - Indonesia 021 39708800</p>
            </li>
            <li className='flex flex-col gap-1'>
              <h1 className='title-footer'>Kantor Bandung</h1>
              <p>Jl. Terusan Setra Indah I No.19, Sukagalih, Sukajadi, Bandung 40163 - Indonesia 022 30508800</p>
            </li>
          </ul>
        </div>
      </div>

      {/* partner logo box*/}
      <div className='px-1 my-10 flex flex-col gap-3 items-center'>
        <h1 className='title-footer'>Terdaftar di PSE, ICANN dan Partner Lainnya</h1>
        <div className='w-1/2 flex flex-row gap-2 justify-center my-2'>
          <img className='h-[50px] md:h-[72px]' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/code.webp" alt="" />
          <img className='h-[50px] md:h-[72px]' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/icann-logo.webp" alt="" />
          <img className='h-[50px] md:h-[72px]' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/badge_litespeed.svg" alt="" />
          <img className='h-[50px] md:h-[72px]' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/badge_whmadmin.svg" alt="" />
          <img  className='h-[50px] md:h-[72px]' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/acronis-cloud-tech.webp" alt="" />
          <img  className='h-[50px] md:h-[72px]' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/acronis-cloud-sales.webp" alt="" />
        </div>
      </div>

      {/* socmed and copyright box */}
      <div className='flex flex-col items-center gap-3 p-2'>
        {/* socmed logo box */}
        <div className='flex gap-2 items-center'>
          <img className='md:h-[36px] h-[30px] bg-orange-500 rounded-full p-1' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Facebook.webp" alt="" />
          <img className='md:h-[36px] h-[30px] bg-orange-500 rounded-full p-1'  src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Instagram.webp" alt="" />
          <img className='md:h-[36px] h-[30px] bg-orange-500 rounded-full p-1' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Twitter.webp" alt="" />
          <img className='md:h-[36px] h-[30px] bg-orange-500 rounded-full p-1' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Youtube.webp" alt="" />
        </div>
        <p className='text-white text-center'>Copyright &#169; PT.Qwords Company International</p>
      </div>
    </footer>
  )
}
