import { Player } from '@lottiefiles/react-lottie-player';
import fries from "./fries.json";

const Fries = () => ( 
<Player
  autoplay
  loop
  src={fries}
  className='w-[100%] h-[100%] min-w-[300px]'
 />
)

export default Fries;