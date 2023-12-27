import { menucard } from "../assets"

const Button = () => {
  return (
    <a href={menucard} target="_blank">
      <button type='button' className={`py-4 px-6
      bg-red font-poppins font-medium
      text-[18px] text-primary outline-none mt-10
      rounded-2xl`}>
        Menu
      </button>
    </a>

  )
}

export default Button