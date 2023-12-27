import { contact_text } from "../constants"
import styles from "../style"

const Contact = () => {
  return (
    <section id="contact" className={`flex sm:flex-row 
    flex-col ${styles.paddingY}`}>
    <div className={`${styles.flexCenter}
    flex-col xl:px-0 sm:px-16 px-6`}>
      <h1 className='font-poppins
          font-semibold ss:text-[68px] text-[52px] text-black 
          ss:leading-[100px] leading-[75px] w-[100%]'>{contact_text.title}
          </h1>
        <p className={`${styles.paragraph} 
        mt-5`}>{contact_text.content}
        </p>
    </div>
    </section>
  )
}

export default Contact