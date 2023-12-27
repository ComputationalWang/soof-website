import styles from '../style'
import { home_text } from '../constants'
import Fries from '../assets/fries'

const Hero = () => (
  <section id="home" className={`flex sm:flex-row 
  flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart}
    flex-col xl:px-0 sm:px-16 px-6`}>
        <h1 className='font-poppins
          font-semibold ss:text-[68px] text-[52px] text-black 
          ss:leading-[100px] leading-[75px] w-[100%] xl:min-w-[800px]'>{home_text.title}</h1>
        <p className={`${styles.paragraph} 
        max-w-[470px] mt-5`}>{home_text.content}
        </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter}
    md:my-0 my-10 relative`} >
      <Fries />
    </div>
  </section>
)

export default Hero