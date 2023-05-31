import './About.css';
import Bell from "../images/icons8-bell.svg"
import Hand from "../images/icons8-waving-hand-emoji-48.png"
import MuteMic from "../images/icons8-mute-64.png"
import Cross from "../images/icons8-delete-64.png"
import Heart from "../images/icons8-heart-50.png"
import PersonIcon from '@mui/icons-material/Person';
import Video from "../images/icons8-video-48.png"
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

export const About = () => {
    return (
      <section className='box'>
        <div className='container'>
          <div className='primary'>
            <div className='logo'>
              <div className='logo-profile'>
                <img src='https://static.vecteezy.com/system/resources/previews/010/871/337/original/3d-avatar-designer-png.png' alt='avatar'/>
              </div>
              <p>Hi, <span>Lay</span></p>
            </div>
            <div className='icons'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABe0lEQVR4nO2WPUsDQRCGHwQtNFZaayGCltqJqBjB1g80/yQgYiE2OfMTlFSaVovYS8DKQrESNW1UopXaamRhAnLsbu729g6EPDBw3NzMOzs7t3fQ458xABSAKnAPfAGfcn0KbAP9aYlvAg2g3cWegHWfwn1AOYJw2AKJTUzZQbxjJR9tbye0tSQD1zAkPQeWgCFgGFgGaoZnH10Hs2BIWLTE7BpitlwKqGoSnf3pziHwDDRl4NQ9DJ04cSngQZNoUXyBYeoVeY1PnROx+dAkGhRfU+NT95CZCPtUrti0PBagTsvY1DWJFixbULJswbVLAQeG1w8ZuEBWHR7CC03cvksBk8CPJtmOJWZP87zKMYEjdcN7XZPDJyeWN6xc2SUJWPVwFK8kKcDWhSh2hQfmDbPQzb6BOTxRcSjgGI+MAu8xxN+AETyzEaMA9SVNhUoE8SNSJAfcWcRv5SclVcaBV434CzBGRszKoHXE1ZdzhoyZlpbfAFNZi/fAF7+ylDYPvSwDMQAAAABJRU5ErkJggg==" alt='location'/>
            <img src={ Bell } alt="bell" />
            <div className='dot'></div>
            </div>
          </div>
          <div className='secondary'>
          <div className='rectangle'>
              <div className='rec1'></div>
              <div className='rec2'></div>
              <div className='rec3'>
                <div className='video'>
                <img className='video_icon' src={Video} alt='video_icon'/>
                </div>
                <div className='sound'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style={{isolation:"isolate", height: "25px", width: "25px", margin: "12px"}} id="Sound"><defs><clipPath id="a"><rect width="64" height="64" fill="#d8a353" class="color000000 svgShape"></rect></clipPath></defs><g clip-path="url(#a)" fill="#d8a353" class="color000000 svgShape"><path d=" M 6.667 44.207 L 16.434 44.207 C 17.108 44.207 18.042 44.594 18.518 45.07 L 29.715 56.268 C 31.145 57.697 32.305 57.216 32.305 55.195 L 32.305 8.801 C 32.305 6.78 31.145 6.299 29.715 7.729 L 18.518 18.926 C 18.042 19.403 17.108 19.789 16.434 19.789 L 6.667 19.789 C 4.645 19.789 3.004 21.431 3.004 23.452 L 3.004 40.544 C 3.004 42.566 4.645 44.207 6.667 44.207 Z " fill="#d8a353" class="color000000 svgShape"></path><path fill-rule="evenodd" d=" M 56.112 32 L 56.112 32 L 56.112 32 C 56.112 32 56.112 32 56.112 32 C 56.112 26.482 54.366 21.098 51.119 16.629 C 47.932 12.234 43.476 8.901 38.361 7.082 L 37.204 6.672 C 36.569 6.447 36.237 5.748 36.462 5.114 L 37.28 2.812 C 37.506 2.177 38.205 1.845 38.839 2.071 L 39.985 2.479 C 46.04 4.628 51.302 8.559 55.075 13.76 C 58.92 19.059 60.996 25.444 60.996 32 C 60.996 32 60.996 32 60.996 32 C 60.996 32 60.996 32 60.996 32 C 60.996 38.544 58.92 44.929 55.075 50.228 C 51.302 55.429 46.04 59.372 39.985 61.521 L 38.839 61.929 C 38.205 62.155 37.506 61.823 37.28 61.188 L 36.462 58.886 C 36.237 58.252 36.569 57.553 37.204 57.328 L 38.361 56.918 C 43.476 55.099 47.932 51.766 51.119 47.371 C 54.366 42.902 56.112 37.518 56.112 32 Z  M 60.996 32 C 60.996 32 60.996 32 60.996 32 L 60.996 32 Z  M 60.996 32" fill="#d8a353" class="color000000 svgShape"></path><path d=" M 38.08 19.486 L 36.985 18.936 C 36.383 18.633 36.14 17.898 36.443 17.296 L 37.544 15.107 C 37.846 14.505 38.58 14.263 39.182 14.567 L 40.265 15.115 C 43.452 16.715 46.162 19.095 48.164 22.038 C 50.142 24.98 51.217 28.447 51.229 32 C 51.217 35.553 50.142 39.008 48.164 41.95 C 46.162 44.892 43.452 47.273 40.265 48.873 L 39.182 49.42 C 38.58 49.724 37.846 49.483 37.543 48.881 L 36.444 46.703 C 36.141 46.101 36.383 45.367 36.985 45.064 L 38.08 44.514 C 40.51 43.293 42.585 41.462 44.123 39.215 C 45.552 37.079 46.333 34.576 46.345 32 C 46.333 29.424 45.552 26.909 44.123 24.785 C 42.585 22.526 40.51 20.707 38.08 19.486 Z " fill="#d8a353" class="color000000 svgShape"></path></g></svg>
                </div>
                <div className='mic'>
                  <img src={MuteMic} alt='mute_mic-icon' /> 
                </div>
                <h1>Jerry, 25</h1>
                <p>Banten, Indonesia</p>
              </div>
            </div>
          </div>
          <div className='line'>
            <div className='inner-line'></div>
          </div>
          <div className='round'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEgUlEQVR4nO2dy4sdVRCHvwHjVhNFZSAmg9GVipLgSpMIxoXJKP4LPjcioibXpUsRgigiGuJGEnSpZunCB0k0ihgjLiMuNLlR8pCA48TklhwoF45zmenu6nOqu+uD3+bSZ+ac+vXj9OnqagiCIAiCIFjCDHAr8AiwB9gPfAGcAE4C54BF1Tn97YRuk7bdDTysfyNYJZuAp4APgDOAGGkMvA88CdwSbvyXdRr0w4YBX0k/AiPgpiGbcT9wCPg7Y+CXKv3vj4FtDIgHgCMFgy5TlPo0r9eeXnIP8I2DQMsKOgZsoUdcC7wOXHYQXFmlrgDvAdfTcR4FfnMQUKmpMzqV7RxrgFeAiYMgSkNN9Ai+mo4w15FzvdS4NmzAObcDvzoIlrSk08DdOGU7cMFBkKRlXQR24Iy0XvOXg+BIJi3oPYObPX/BQVAksxY9HAl3AucdBEMK6Y+S14Q5XWWUgetUidlRmud/6WDw4kRf575PeMPBoMWZ9uZcXujDHa4Ya5Jj2WKt8ZMq6ZnGGqPWeNvBIMW53mwr+Ft0mbb0AMW5ruizD1NmerrAJi3pqLUBOx0MSjqmBy0NOFLgNn8PMKsa6W+52lso5SeZZS/k3ntGy/RjlLG9lbZaGHCoQMdnl+nHbMb2VvqoafBvKJS3M41c7a2UYncjDXi+QKelRwYkPdvEgO/CAJoakKbvtRNlS+wx0rMjQHTpvjJPhwFYGfBEHQNSingcAZjE4GCdpYeST7v6dgoaV036va1gZ6WHBoheUyulmYQBmMZgVxUD0jpKGIBpDF6oYsC7YQDWO+C+KgZ8HgZgbcCnVQz4IQzA2oDvqxjwcxiAtQE/VTHgbBiAtQG/VzEg99MjWaJp5GrfhlL2eBhARwyIUxBlT0FxEabsRTimoZSdhsaNGGVvxPYXvmBNI1f7NvQOFUjFjsIATGOQEhxWTcpzDwMwjUFK71w1qcxXGIBpDCpV6prRt8JLmTCNXO3beJGvch2iVGMtDMAkBgeoQarjFgZgEoPH6hiQzllhACYx2EhNvo1rABZlbmrzXBhAUwOeaZqefqmACdPI1d5NejpaVzN3x2d78oLGhxiVo8nd8dEy/XgpY3sr3YcROcsKiz4SHTV8Sa9JewulFWUzHiqw90jHZVrMaUanU6UHJR1ROmOYs7lj1W+lkC63WUXrLQcDFOdKRV5b4xpd2Ss9SHGqsdbKbpX0YCEKNvG/4E/0vYosvOZgbxNnepXMRfuOOhi0ONGxEsW9NxZ+aiZOlGpl30wh7tBPSMlAdQG4i8JsG2jp4gXLtZ6mzA/MhD+rvvWY60gYQvn681aFmNr6gMMvDoIkLem0h3P+SqRC1l85CJYYK02719MRrgJe7kmd0UnXPuKzNMd03PFTzk46Tpc/5HYdPWJzR5YvDnv+UpIF9wKfOA38PANiq9bVLJF39K8uaeqImzvaEqwt+EHnxklTfWNOC9wdNF5pPaUp4o83SZQdIpt0zeVFrbfzGXAcOKkvky+qzupvx3WbfVogaVfVUmFBEARBEDAM/gH3OtzaQ4HGWgAAAABJRU5ErkJggg==" alt='pause'/>
          </div>
          <div className='emojis'>
            <div className='cross'>
              <img className='cross-btn' src={Cross} alt='cross'/>
            </div>
            <div>
              <img src={Hand} alt='hand' />
            </div>
            <div className='heart'>
              <img src={Heart} alt='heart'/>
            </div>
          </div>
          <div className='tertiary'>
            <div className='chats'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABT0lEQVR4nO2YO0oEQRBA32KkHsELiKCGHkEDNTNVRIz9JAueQHQxWTYwco9g5EEEcRW9g4GfZNwWoReaQXcdu2umC+pBRU1T9bp6KKbBMAwjd5aAY6CdOI6AZcnCW8A58Ak4oRgCPZ8rOfuChZdjT0LgsUaBgYRAUaNAISHgao7kmADWgTjsCvH/K9ROMamb7IBLMalzEHAxkzongYF2gUK7gMtdoAjyTmkUuA/yzmkU2A3ybmkSGALdUt6bOgSegA5wGhGH/n87ZH1MzmQCV8AM6VkBXiQFXoGd9HXzfRgnwMeErlcm3HwHLJTWY59VLoBrfzB/+V4q8+439oHZCYJ1RGXWgI0x69kL5PRq4RDgQbvAgXaBFnAm/HbqJAVGLPqpGjOVO8BzUwKpmAYuNQuM2P5luKliHrjVLICf/n1f/BuK2QRWmy7CMAyDH/kCdKhYtJ+PNWUAAAAASUVORK5CYII=" alt='chats'/>
            </div>
            <EmailIcon fontSize='large' color='action'/>
            <FavoriteIcon fontSize='large' color='action'/>
            <Link to="/profile">
            <PersonIcon className='profile' fontSize='large' color='action'/>
            </Link>
          </div>
        </div>
      </section>
    )
  }
  