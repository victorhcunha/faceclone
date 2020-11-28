import {AiFillVideoCamera, AiOutlineFileImage, AiFillMeh} from 'react-icons/ai'

export default function(){
    return (
        <div className="feed">
        <div className="postfeed">
          <img src={windowsxp} alt="img"/>
          <input type="text" placeholder="No que você está pensando?"/>
        </div>

        <div className="feedicons">

          <div className="iconSingle">
            <AiFillVideoCamera/>
            <spam>Video ao vivo</spam>
          </div>

          <div className="iconSingle img">
            <AiOutlineFileImage/>
            <spam>Video ao vivo</spam>
          </div>

          <div className="iconSingle emoji">
            <AiFillMeh/>
            <spam>Video ao vivo</spam>
          </div>

        </div>

      </div>
    )
}