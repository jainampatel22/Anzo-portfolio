import { useGSAP } from '@gsap/react'
import React from 'react'
import { gsap } from 'gsap';
const Page1Bottom = () => {
  useGSAP(function(){
    gsap.to("#img img",{
      rotate:360,
      duration:5,
      repeat:-1,
ease:'linear'
    })
  })
  return (
    <div className='mt-2  absoulte bottom-0 w-full flex items-start justify-between '>
<div className=''>
  <h2 className='py-20 text-white   font-[anzo2] '>
  BRAND DESIGN | WEBSITE DESIGN <br /> <span className='text-white font-[anzo3] text-l'> BESPOKE FREELANCE</span> </h2> 

</div>
<div id="img">
  <img className='mb-2' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" srcset="" />
  <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" srcset="" />

</div>

    </div>
  )
}

export default Page1Bottom