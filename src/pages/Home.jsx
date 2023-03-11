import image from '../images/yasmeen.webp'
import { Link } from 'react-router-dom'

export default function Home({imageDetails}) {
 
  return (
    <>
      <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/model`}>
                  <img src={image} alt='Yasmeen Tariq' />
                </Link>
              </div>
            </div>
            <div className='information'>
              <div className='title'>Yasmeen Tariq</div>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
      
    </>
  )
}
