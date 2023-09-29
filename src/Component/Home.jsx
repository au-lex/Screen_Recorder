import React from 'react'
import img1 from "../assets/Frame 1000002595.png"
import img2 from "../assets/Frame 1000002596.png"
import img3 from "../assets/Frame 1000002597.png"
import svg from"../assets/grid.136a9256d16888900db0.svg.png"
import vid from"../assets/Video Repository.png"
import Header from "./Header"
import rec from "../assets/rec-1.cb7888a47e24214aeb105805426a8300.svg.png"

import {BsFillRecordCircleFill, BsFillSendFill} from"react-icons/bs";
import {FcRefresh} from "react-icons/fc"
import {RiSendPlaneFill} from "react-icons/ri"

const Home = () => {
    return (
        <>
         <main>
            <div className ="bg-white bg h-[100vh]">

           
           <Header />
            <section className='flex justify-around pt-[8rem] px-[5rem] '>
                <section className="herotext  ">
                    <h1 className ="text-[3.4rem] text-slate-900  leading-[3.8rem] capitalize font-extrabold">Show them <br />
                     Don't just tell </h1>
                     <p className='tc my-[1.8rem]'>Help your friends and loved ones by creating and sending ,<br /> videos
                        on how to get things done on a website
                     </p>
                <div className="w-[50%] mt-3 ">
                    <button className='btn text-slate-100 py-2 px-8 rounded-md text-[12px]  '>install Helpout </button>
                </div>
                </section>
                <figure className='flex'>
                    <div className="heroimg mr-5">
                        <img src={img1} alt=""  className='mb-5'/>

                        <div className='relative'>


                        <div className=' b'>

<img src={img2} alt=""  />
</div>
                        <div className='absolute  d'>
                            <img src={svg} alt=""  />
                        </div>
                        </div>
                    </div>
                    <div className ="relative c">
                        <div className='absolute  a'>
                            <img src={svg} alt=""  className=''/>
                        </div>
                        <div className=' b'>

                        <img src={img3} alt=""  />
                        </div>

                    </div>
                </figure>
            </section>
            </div>


            {/* -------------------------------features----------------------------- */}

<section  className  ="bg-white mt-[4rem] px-[5rem]">
      <section className="featuresTitle text-center pt-[5rem]">
        <h1 className='text-slate-900 font-bold text-[2.5rem]'>Features</h1>
        <p className='tc'>Key Highlight of Our Extenstion</p>
      </section>


<section className='flex justify-around pt-[5rem]'>


      <figcaption className="Content">
          <div className ="flex space-x-4">
            <span className='block w-[2rem] h-[2rem] rounded-full tcb relative'>
            <span className='text-white absolute top-2 left-2'><BsFillRecordCircleFill /></span>
               
            </span>
            <div>
            <h3 className='font-bold'>Simple Screen Recording</h3>
            <p>Effortless screen recording for everyone.Record <br /> with ease, no tech expertise required</p>

            </div>
          </div>

          <div className ="flex space-x-4 my-[4rem]">
            <span className='block w-[2rem] h-[2rem] rounded-full relative tcb'>
            <span className='text-white absolute top-2 left-1 text-[1.2rem]' > <RiSendPlaneFill /> </span>
            </span>
            <div>
            <h3 className='font-bold'>Easy-to-Share URL </h3>
            <p>Share your recordings instantly with a single click <br /> No attachment, no downloads</p>

            </div>
          </div>

          <div className ="flex space-x-4">
            <span className='block w-[2rem] h-[2rem] rounded-full tcb relative'>
                <span className='text-white absolute top-2 bg-slate-100 rounded-md left-2'><FcRefresh/></span>
               </span>
            <div>
            <h3 className='font-bold'>Revisit Recordings</h3>
            <p> Acess and review  your past content Effortless <br /> Your recordings always at ur fingertips</p>

            </div>
          </div>
      </figcaption>


      <figure>
        <div className = " w-[550px] h-[450px]">
            <img src={vid} alt="" />
        </div>
      </figure>
      </section>
</section>



{/*------------------------------------- How  it works------------------------------------------- */}

<section>
    <div className='bg-white h-[110vh] w-[100%] mt-[4rem]'>


    <section className="HowTitle text-center py-[6rem]">
        <h1 className='text-slate-900 font-bold text-[2.5rem]'>How it works</h1>
       
      </section>
<div className='flex justify-around px-[5rem]'>


      <section>
        <div className ="tcb h-[2.5rem] w-[2.5rem] rounded-full pt-2  mx-auto">
            <span className='px-4 py-[2rem] text-center text-white font-bold'>1</span>
        </div>
        <section className='my-[1rem]'>
            <h1 className='font-bold mb-2 text-center'>Record Screen</h1>
            <p className='text-center'> clcik the "start Recording" button in<br /> our extension 
            choose which part <br /> of screen to capture and who <br /> you want to send it to</p>
        </section>
        <div>
            <img src={rec} alt="" />
        </div>
      </section>

      <section>
        <div className ="tcb h-[2.5rem] w-[2.5rem] rounded-full pt-2 mx-auto">
            <span className='px-4 py-[2rem] text-white font-bold'>2</span>
        </div>
        <section className='my-[1rem]'>
            <h1 className='font-bold mb-2 text-center'>Record Screen</h1>
            <p className='text-center'> clcik the "start Recording" button in<br /> our extension 
            choose which part <br /> of screen to capture and who <br /> you want to send it to</p>
        </section>
        <div>
            <img src={rec} alt="" />
        </div>
      </section>

      <section>
        <div className ="tcb h-[2.5rem] w-[2.5rem] rounded-full pt-2 mx-auto">
            <span className='px-4 py-[2rem] text-white font-bold'>3</span>
        </div>
        <section className='my-[1rem]'>
            <h1 className='font-bold mb-2 text-center'>Record Screen</h1>
            <p className='text-center'> clcik the "start Recording" button in<br /> our extension 
            choose which part <br /> of screen to capture and who <br /> you want to send it to</p>
        </section>
        <div>
            <img src={rec} alt="" />
        </div>
      </section>


      </div>
    </div>
</section>


{/* ------------------------------------------footer-------------------------------------------------- */}

<footer className='tcb w-full h-[40vh]'>
<section className='flex justify-around px-[5rem] pt-[5rem]'>
    <div className ="footerlogo">
        <img src="" alt="" />
    </div>

    <ul>
        <h2 className=' text-white my-2'>Menu</h2>
        <li className=' text-slate-300 my-2 text-[12px]'>Home</li>
        <li className=' text-slate-300 my-2 text-[12px]'>Converter</li>
        <li className=' text-slate-300 my-2 text-[12px]'>How it works</li>
    </ul>


    <ul>
        <h2 className=' text-white my-2'>About</h2>
        <li className=' text-slate-300 my-2 text-[12px]'>About</li>
        <li className=' text-slate-300 my-2 text-[12px]'>Contact us</li>
        <li className=' text-slate-300 my-2 text-[12px]'>Privacy policy</li>
    </ul>


    <ul>
        <h2 className=' text-white my-2'>Screen Record</h2>
        <li className=' text-slate-300 my-2 text-[12px]'>Browser window</li>
        <li className=' text-slate-300 my-2 text-[12px]'>Desktop</li>
        <li className=' text-slate-300 my-2 text-[12px]'>Application</li>
    </ul>
</section>

</footer>
         </main>
        </>
    )
}

export default Home
