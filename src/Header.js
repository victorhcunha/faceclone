import {FaFacebook, FaSearch, FaAlignJustify} from 'react-icons/fa'

export default function(){
    return (
        <div className="header">
          <div className="headerleft">
            <div className="logo-fb"> <FaFacebook/> </div>
            <div className="search-fb"> <FaSearch/> </div>
            <div className="menu-fb"> <FaAlignJustify/> </div>
          </div>

          <div className="headerright">
            <div className="plus-btn">
                +
            </div>
      </div>
        </div>
    )
}