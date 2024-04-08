import { facebook, phone, location } from "../assets"
import { contact_text } from "../constants"
import styles from "../style"

const Contact = () => {
  return (
    <div className="flex items-center justify-center">
      <section id="contact" className={`flex sm:flex-row 
    items-center ${styles.paddingY}`}>
        <div className={`${styles.flexCenter}
    flex-col xl:px-0 sm:px-16 px-6`}>
          <h1 className='font-poppins
          font-semibold ss:text-[68px] text-[52px] text-black 
          ss:leading-[100px] leading-[75px]'>{contact_text.title}
          </h1>
          <div className={`flex mt-5 items_center`}>
            <img src={location} alt="Location Icon" className="mr-2" />
            <a target="_blank" className={`${styles.a}`}
              href="https://maps.app.goo.gl/6jw4Fk1wBSEmi9MWA">
              {contact_text.location}
            </a>
          </div>
          <div className={`flex mt-5 items_center`}>
            <img src={phone} alt="Phone Icon" className="mr-2" />
            <a target="_blank" className={`${styles.a}`}
              href={`tel:${contact_text.phone}`}>
              {contact_text.phone}
            </a>
          </div>
          <div className={`flex mt-5 items_center`}>
            <img src={facebook} alt="Facebook Icon" className="mr-2" />
            <a target="_blank" className={`${styles.a}`}
              href="https://www.facebook.com/people/De-Driesprong/100063655089032">
              {contact_text.facebook}
            </a>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Contact