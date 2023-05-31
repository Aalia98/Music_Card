import "./Profile.css"
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import Edit from "../images/icons8-edit-64.png"
import Correct from "../images/icons8-correct-24.png"
import Boxer from "../images/icons8-gloves-66.png"
import Coffee from "../images/icons8-coffee-67.png"
import Music from "../images/icons8-musical-notes-30.png"
import Design from "../images/icons8-paint-26.png"
import Cycle from "../images/icons8-bicycle-30.png"
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <section className='box'>
        <div className='container_profile'>
          <div className="primary_profile">
            <Link to="/about">
            <div className="back">
              <KeyboardBackspaceRoundedIcon/>
            </div>
            </Link>
            <div>
              <h1>Profile</h1>
            </div>
            <div className="edit">
              <img src={Edit} alt="Edit-icon" />
            </div>
          </div>
          <div className="secondary_profile">
            <div className="rec_profile">
            
              <div className="rec1_pro">
                <img src="https://static.vecteezy.com/system/resources/previews/010/871/278/original/3d-avatar-cashier-free-png.png" alt="avatar"/>
              </div>
              <div className="rec2_pro">
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cashier-man-5796526-4841525.png" alt="avatar"/>
              </div>
              <div className="rec3_pro">
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/administrator-6368695-5250842.png" alt="avatar"/>
              </div>
            </div>
          </div>
          <div className="heading_profile">
            <div className="text">
              <p><span>Lay,</span> 25</p>
              <div className="tik">
                <img src={Correct} alt="tik"/>
              </div>
            </div>
            <p>Prague, Czech Republic</p>
          </div>
          <div className="social">
            <div className="telegram">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 100 100" viewBox="0 0 100 100" id="telegram"><path fill="#1b92d1" d="M88.723,12.142C76.419,17.238,23.661,39.091,9.084,45.047c-9.776,3.815-4.053,7.392-4.053,7.392
			s8.345,2.861,15.499,5.007c7.153,2.146,10.968-0.238,10.968-0.238l33.62-22.652c11.922-8.107,9.061-1.431,6.199,1.431
			c-6.199,6.2-16.452,15.975-25.036,23.844c-3.815,3.338-1.908,6.199-0.238,7.63c6.199,5.246,23.129,15.976,24.082,16.691
			c5.037,3.566,14.945,8.699,16.452-2.146c0,0,5.961-37.435,5.961-37.435c1.908-12.637,3.815-24.321,4.053-27.659
			C97.307,8.804,88.723,12.142,88.723,12.142z"></path></svg>
            </div>
            <div className="discord">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48" id="discord"><path fill="#5865F2" d="M40.6607 8.09869C37.5071 6.63024 34.1778 5.58847 30.758 5C30.29 5.85085 29.8666 6.72626 29.4894 7.62256C25.8466 7.06427 22.1421 7.06427 18.4993 7.62256C18.122 6.72635 17.6986 5.85095 17.2308 5C13.8088 5.59344 10.4773 6.63768 7.32049 8.10637C1.05338 17.5368 -0.645532 26.7331 0.203925 35.7988C3.8741 38.5567 7.98207 40.6542 12.3493 42C13.3326 40.6549 14.2028 39.2278 14.9505 37.734C13.5303 37.1946 12.1596 36.529 10.8542 35.745C11.1978 35.4916 11.5338 35.2305 11.8585 34.9771C15.6569 36.7938 19.8026 37.7358 24.0001 37.7358C28.1975 37.7358 32.3432 36.7938 36.1416 34.9771C36.4701 35.2497 36.8061 35.5108 37.1459 35.745C35.838 36.5303 34.4647 37.1971 33.0421 37.7379C33.7888 39.231 34.6591 40.6568 35.6433 42C40.0142 40.6596 44.1253 38.5631 47.7962 35.8026V35.8026C48.7929 25.2893 46.0935 16.1776 40.6607 8.09869ZM16.0265 30.2234C13.6593 30.2234 11.7037 28.0386 11.7037 25.3508C11.7037 22.6629 13.5914 20.4589 16.0189 20.4589C18.4465 20.4589 20.387 22.6629 20.3455 25.3508C20.304 28.0386 18.4389 30.2234 16.0265 30.2234ZM31.9736 30.2234C29.6027 30.2234 27.6546 28.0386 27.6546 25.3508C27.6546 22.6629 29.5423 20.4589 31.9736 20.4589C34.405 20.4589 36.3304 22.6629 36.2889 25.3508C36.2473 28.0386 34.3861 30.2234 31.9736 30.2234Z"></path></svg>
            </div>
            <div className="messenger">
            <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024" id="facebook-messenger"><defs><radialGradient id="a" cx="19.247%" cy="99.465%" r="108.96%" fx="19.247%" fy="99.465%"><stop offset="0%" stop-color="#09F"></stop><stop offset="60.975%" stop-color="#A033FF"></stop><stop offset="93.482%" stop-color="#FF5280"></stop><stop offset="100%" stop-color="#FF7061"></stop></radialGradient></defs><g fill="none" fill-rule="evenodd"><rect width="1024" height="1024" fill="none"></rect><path fill="url(#a)" d="M512,122 C286.668,122 112,287.056 112,510 C112,626.6144 159.792,727.3824 237.6224,796.984 C244.156,802.832 248.1,811.024 248.368,819.792 L250.5464,890.944 C251.2424,913.64 274.6856,928.408 295.4536,919.24 L374.848,884.192 C381.5784,881.224 389.12,880.672 396.212,882.624 C432.696,892.656 471.5264,898 512,898 C737.332,898 912,732.944 912,510 C912,287.056 737.332,122 512,122 Z"></path><path fill="#FFF" d="M271.8016,623.4688 L389.3016,437.0528 C407.992,407.3968 448.016,400.0128 476.06,421.0448 L569.5136,491.1352 C578.088,497.5672 589.8856,497.5328 598.424,491.0528 L724.6376,395.2648 C741.484,382.4808 763.4736,402.6408 752.2,420.5312 L634.7,606.9488 C616.008,636.6032 575.984,643.9888 547.9416,622.9552 L454.4856,552.8632 C445.912,546.4328 434.1136,546.4672 425.576,552.9472 L299.3616,648.7352 C282.516,661.5184 260.5256,641.3584 271.8016,623.4688 Z"></path></g></svg>
            </div>
            <div className="linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" id="linkedin"><g fill="none" fill-rule="evenodd"><rect width="72" height="72" fill="#117EB8" rx="4"></rect><path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path></g></svg>
            </div>
          </div>
          <div className="interest">
            <h3>Interests</h3>
            <h6>Edit</h6>
          </div>
          <div className="small_icons">
            <div className="dribble">
              <div className="drib_icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="dribbble"><circle cx="8" cy="7.946" r="7.5" fill="#EC407A"></circle><path fill="#C2185B" d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm6.997 8.06a11.121 11.121 0 0 0-5.086-.158 28.054 28.054 0 0 0-.732-1.667 15.09 15.09 0 0 0 4.095-2.822A6.96 6.96 0 0 1 15 8c0 .02-.003.039-.003.06zm-2.43-5.353a14.07 14.07 0 0 1-3.822 2.639 28.107 28.107 0 0 0-2.61-4.086A6.96 6.96 0 0 1 8 1a6.96 6.96 0 0 1 4.567 1.707zm-7.42-1.093a27.08 27.08 0 0 1 2.665 4.109 14.08 14.08 0 0 1-6.663.843 7.02 7.02 0 0 1 3.998-4.952zM1 8c0-.15.013-.297.023-.444.592.07 1.184.116 1.774.116 1.882 0 3.731-.368 5.464-1.043.24.5.466 1.007.675 1.521a11.209 11.209 0 0 0-6.122 4.535A6.966 6.966 0 0 1 1 8zm2.545 5.395A10.205 10.205 0 0 1 9.296 9.08a27.04 27.04 0 0 1 1.352 5.396 6.967 6.967 0 0 1-7.103-1.081zm8.041.605a28.095 28.095 0 0 0-1.308-5.152 10.132 10.132 0 0 1 4.632.218A7.004 7.004 0 0 1 11.586 14z"></path></svg>
              </div>
            <h5>Dribbble</h5>
            </div>
            <div className="boxing">
              <div className="boxing_icon">
              <img src={Boxer} alt="boxer" />
              </div>
              <h5>Boxing</h5>
            </div>
            <div className="coffee">
              <div className="coffee_icon">
                <img src={Coffee} alt="coffee" />
              </div>
              <h5>Coffee</h5>
            </div>
            <div className="music">
              <div className="music_icon">
                <img src={Music} alt="music" />
              </div>
              <h5>Music</h5>
            </div>
            <div className="design">
              <div className="design_icon">
                <img src={Design} alt="design" />
              </div>
              <h5>Design</h5>
            </div>
            <div className="cycling">
              <div className="cycling_icon">
                <img src={Cycle} alt="cycling"/>
              </div>
              <h5>Cycling</h5>
            </div>
          </div>
          <div className='tertiary_profile'>
            <ForumIcon fontSize="large" color="action"/>
            <EmailIcon fontSize='large' color='action'/>
            <FavoriteIcon fontSize='large' color='action'/>
            <PersonIcon className='profile' fontSize='large'/>
          </div>
        </div>
      </section>
  )
}
