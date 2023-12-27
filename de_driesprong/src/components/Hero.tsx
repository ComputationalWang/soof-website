import styles from '../style'
import { hero_text } from '../constants'

const Hero = () => (
  <section id="home" className={`flex md:flex-row 
  flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart}
    flex-col xl:px-0 sm:px-16 px-6`}>
        <h1 className='font-poppins
          font-semibold ss:text-[68px] text-[52px] text-black 
          ss:leading-[100px] leading-[75px] w-full'>{hero_text.title}</h1>
        <p className={`${styles.paragraph} 
        max-w-[470px] mt-5`}>{hero_text.content}
        </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter}
    md:my-0 my-10 relative`} >

      <div className='absolute z-[0] w-[40%] top-0 
      h-[35%] pink__gradient'></div>
      
      <div className='absolute z-[1] w-[80%] bottom-40 
      h-[80%] white__gradient'></div>
      
      <div className='absolute z-[0] w-[50%]
      h-[50%] right-20 bottom-20 blue__gradient'></div>
    </div>
  </section>
)

export default Hero