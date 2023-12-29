import { about_us_text, opening_hours_text } from "../constants"
import styles from "../style"

function createParagraphs(textWithNewlines: string) {
  return textWithNewlines.split('\n').map((line, index) => (
    <p className="max-w-[500px] font-poppins" key={index}>{line}</p>
  ));
}

const AboutUs = () => {
  return (
    <section id="about_us" className={`flex sm:flex-row 
    flex-col ${styles.paddingY}`}>
    <div className={`${styles.flexStart}
    flex-col xl:px-0 sm:px-16 px-6 xl:min-w-[800px]`}>
      <h1 className='font-poppins
          font-semibold ss:text-[68px] text-[52px] text-black 
          ss:leading-[100px] leading-[75px] w-[100%] '>{about_us_text.title}</h1>
          {createParagraphs(about_us_text.content_1)}
          <br />
          {createParagraphs(about_us_text.content_2)}
          <br />
          {createParagraphs(about_us_text.content_3)}
          <br />
          {createParagraphs(about_us_text.content_4)}
    </div>

    <div className={`${styles.flexCenter}
    flex-col xl:px-0 sm:px-16 px-6 xl:ml-[6%] italic`}>
      <h1 className='font-poppins ss:leading-[100px] leading-[75px] w-[100%]
            font-semibold ss:text-[40px] text-[39px] text-black w-full'>{opening_hours_text.title}</h1>
        <pre className={`${styles.paragraph} 
        max-w-[470px] mt-5`}>{opening_hours_text.content}
        </pre>
    </div>
    </section>
  )
}

export default AboutUs