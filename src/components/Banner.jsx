import RatingIcon from '../assets/rating.png'
import HalfRatingIcon from '../assets/rating-half.png'
import TempImg from '../assets/temp-1.jpeg'
import PlayIcon from '../assets/play-button.png'

const Banner = () => {
  return (
    <div className="w-full h-[800px] bg-banner
    bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0
      bg-black opacity-40" />
      <div className="w-full h-full flex items-center justify-center
      space-x-[30px] p-4 relative z-20">
        <div className='flex flex-col space-y-5 items-baseline
        w-[50%]'>
          <p className="text-white bg-gradient-to-r from-red-600
           to-red-300 text-md py-1 px-3">
            TV Show
          </p>
          <div className="flew flex-col space-y-4">
            <h2 className="text-white text-[40px] font-bold">
              Nghe nói em thích tôi
            </h2>
            <div className="flex items-center space-x-3">
              <img src={RatingIcon} alt='rating' className='w-8 h-8'/>
              <img src={RatingIcon} alt='rating' className='w-8 h-8'/>
              <img src={RatingIcon} alt='rating' className='w-8 h-8'/>
              <img src={RatingIcon} alt='rating' className='w-8 h-8'/>
              <img src={HalfRatingIcon} alt='rating' className='w-8 h-8'/>
            </div>
            <p className='text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit iure distinctio quisquam. Consectetur dolore atque optio laudantium, consequuntur sint harum cum fugiat. Nihil totam quis cum hic repudiandae sit?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus porro suscipit alias, natus nam ipsa cumque mollitia non! Dolores eos impedit magni repellat, reiciendis iusto ut minima itaque nostrum voluptates!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa minima natus, sit accusamus repellat, temporibus debitis quaerat ad libero laudantium nobis quod, at deserunt laborum ratione consequuntur quidem quis?
            </p>
            <div className='flex items-center space-x-4'>
              <button className='px-4 py-3 text-white bg-black
              font-bold text-sm'>
                Chi tiết
              </button>
              <button className='px-4 py-3 text-white bg-red-600
              font-bold text-sm'>
                Xem phim
              </button>
            </div>
          </div>
        </div>
        <div className='w-[50%] flex items-center justify-center'>
          <div className='w-[300px] h-[400px] relative group cursor-pointer'>
            <img 
              src={TempImg} 
              alt='temp poster image' 
              className='w-full h-full object-cover'
            />
            <div className='w-full h-full absolute 
            top-0 left-0 flex items-center justify-center 
            backdrop-blur-sm opacity-0 group-hover:opacity-100
            transition-opacity duration-500 ease-in-out'>
              <img 
                src={PlayIcon}
                alt='Play'
                className='w-16 h-16 relative z-20'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner