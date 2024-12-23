import arrow from '../../assets/arrow_btn.png'
import play from '../../assets/play_icon.png'
import pause from '../../assets/pause_icon.png'



const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {

  return (
    <div className="hero">
      <div className="hero_text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero_explore">
        <p>Explore the features</p>
        <img src={arrow} alt="" />
      </div>
      <div className="hero_dot_play">
        <ul className='hero_dots'>
          <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero_dot orange" : "hero_dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero_dot orange" : "hero_dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero_dot orange" : "hero_dot"}></li>
        </ul>
        <div className="hero_play">
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause:play} alt="" />
          <p>See the video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero