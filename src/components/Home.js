import './Home.css';
import { Link } from "react-router-dom";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AppleIcon from '@mui/icons-material/Apple';
import Google from "../images/icons8-google.svg";
import Image1 from "../images/ThreeDee Female (1).png"
import Image2 from "../images/ThreeDee Male (1).png"
import Image3 from "../images/ThreeDee Female (2).png"

export const Home = () => {
  return (
    <section className='box'>
        <div className="container">
        <div className='heading-primary'>
            <p><span>META</span>MATCH</p>
        </div>
        <div className='circle1'>
          <img src={Image1} alt='avatar' />
        </div>
        <div className='circle2'>
          <img src={Image2} alt='avatar' />
        </div>
        <div className='circle3'>
          <img src={Image3} alt='avatar' />
        </div>
        <div className='circle4'>
          <img src="https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-business-man-avatar-png-image_6514640.png" alt='avatar'/>
        </div>
        <div className='circle5'>
          {/* <img src="https://cdn3d.iconscout.com/3d/premium/thumb/woman-avatar-6299541-5187873.png" alt='avatar'/> */}
        </div>
        <div className='circle6'>
          <img src='https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png' alt='avatar'/>
        </div>
        <div className='circle7'>
          <img src='https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png' alt='avatar'/>
        </div>
        <div className='heading-secondary'>
            <h1>Find your <span>first meta</span> matches.</h1>
            <p>Join and socialize with millions of meta humans</p>
        </div>
        <div className='button'>
          <Link className='inner_btn' to="/about">
          <div className='button-primary'>
            <div>
            <h4>Get started</h4>
            </div>
            <div><ArrowOutwardIcon/></div>
          </div></Link>
          <div className='button-secondary'>
            <AppleIcon fontSize='large'/>
          </div>
          <div className='button-tertiary'>
            <img src={Google} alt='google' />
          </div>
        </div>
        <div className='heading-tertiary'>
        <h6>Already have an account? <span>Sign in</span></h6>
        </div>
        </div>
        

    </section>
  )
}
