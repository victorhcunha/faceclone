import windowsxp from './resources/windowsxp.jpg';

export default function(){
    return (
        <div className="feedposts">
          <div className="feedpostsingle">
            <div className="feedpostprofile">
                <img src={windowsxp} alt="img"/>
                <h3>Fulano de Tal</h3>
                <span>4h</span>
            </div>
            <div className= "feedpostcontent">
              <p>Conteúdo publicado</p>
              <img src={windowsxp} alt="img"/>
            </div>

          </div>
      </div>
    )
}