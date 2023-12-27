import { advertisement_text, menu_text } from '../constants'
import styles from '../style'
import { dagingsmoor } from '../assets'
import { Button } from '.'

function Menu() {
  return (
    <section id="menu" className={`flex sm:flex-row 
    flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart}
        flex-col xl:px-0 sm:px-16 px-6 max-w-[600px] xl:min-w-[800px]`}>
            <h1 className='font-poppins
            font-bold ss:text-[54px] text-[42px] text-black 
            ss:leading-[80px] leading-[60px] w-full'>{advertisement_text.title}</h1>
            <img src={dagingsmoor} alt="dagingsmoor" 
            className='xl:w-[65%] w-[100%] h-[100%] rounded-3xl'/>
            <p className={`${styles.paragraph} 
                max-w-[470px] mt-5`}>{advertisement_text.content}
            </p>
        </div>
        <div className={`${styles.flexStart}
        flex-col xl:px-0 sm:px-16 px-6 xl:ml-[8%]`}>
            <h1 className='font-poppins
            italic font-semibold ss:text-[40px] text-[39px] text-black w-full'>{menu_text.title}</h1>
            <p className={`${styles.paragraph} 
                max-w-[250px]`}>{menu_text.content}
            </p>
            <Button />
        </div>
    </section>
  )
}

export default Menu