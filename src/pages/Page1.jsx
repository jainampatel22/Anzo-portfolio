import React, { useRef, useState ,useEffect} from 'react'
import Page1Bottom from '../components/Page1Bottom'
import Tilttext from '../components/Tilttext'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
const Page1 = () => {
   const tiltRef = useRef(null)
const [xval, setxval] = useState(0)
const [yVal, setyVal] = useState(0)
    const MouseMoving=(e)=>{
        setxval(e.clientX/20)
        setyVal(e.clientY/20)
 // tiltRef.current.style.transform= `rotateX(${yVal}deg) rotateY(${xval}deg) `  
    }

useGSAP(function(){
    gsap.to(tiltRef.current,{
        transform: `rotateX(${yVal}deg) rotateY(${xval}deg) `,
        duration: 5,
        ease:'elastic.out(1,0.3)'
    })
},[xval,yVal])
  return (
    <div onMouseMove={(e)=>{
        MouseMoving(e)
    }} className='h-screen p-3 bg-white text-black'>
        <div id='page-1'  className='relative shadow-xl p-12  h-full w-full bg-cover rounded-[30px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1322,h_614,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)]'>
<img className='h-16' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" srcset="" />
<Tilttext abc={tiltRef}/>
      <Page1Bottom/>

        </div>
    </div>
  )
}

export default Page1