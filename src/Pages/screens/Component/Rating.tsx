import { AiOutlineStar } from "react-icons/ai";

type Props = {
    rating: number | undefined;
    icon?: JSX.Element;
  };
  export function Rating({ rating, icon}: Props) {
    return (
        <div >
            {(rating? rating < 2.5 :2 )  ? 
            (
                <div className="flex">
                <div className='flex text-yellow-400' >
                  <AiOutlineStar
                    size={16}
                  />
                  <AiOutlineStar
                    size={16}
                  /></div>
                   <AiOutlineStar
                    size={16}
                  />
                  <AiOutlineStar
                    size={16}
                  />
                   <AiOutlineStar
                    size={16}
                  />
                 
                  </div>
            ) : (rating ? rating < 3.5 : 3 ) ? (
                <div className="flex">
                 <div className='flex text-yellow-400' >
            <AiOutlineStar
              size={16}
            />
            <AiOutlineStar
              size={16}
            />
            <AiOutlineStar
              size={16}
            />
            </div>
            <AiOutlineStar
              size={16}
            />
            <AiOutlineStar
              size={16}
            />
            </div>
            ) : (rating ? rating <= 4.5 : 4 ) ? (
                <div className="flex ">
                <div className='flex text-yellow-400'>
             <AiOutlineStar
             size={16}
           />
           <AiOutlineStar
             size={16}
           />
           <AiOutlineStar
             size={16}
           />
            <AiOutlineStar
             size={16}
           />
          
           </div>
           <AiOutlineStar
           size={16}
         />
          </div>
            ) : 
            (rating ? rating >= 4.5 : 5 ) ? (
                <div className='flex text-yellow-400'>
             <AiOutlineStar
             size={16}
           />
           <AiOutlineStar
             size={16}
           />
           <AiOutlineStar
             size={16}
           />
            <AiOutlineStar
             size={16}
           />
            <AiOutlineStar
             size={16}
           />
           </div>
            ) :
             (<></>)}
        </div>
    )
  }
  export default Rating