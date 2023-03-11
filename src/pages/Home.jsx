import image from '../images/yasmeen.webp'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


export default function Home({imageDetails}) {

  const transition = {duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96]}
 
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
                  <motion.img 
                  whileHover={{scale: 1.1}} 
                  exit={{ scale: 1}}
                  transition={transition}
                  src={image} 
                  alt='Yasmeen Tariq' />
                </Link>
              </div>
            </div>
            <motion.div 
             exit={{ opacity: 0 }}
             transition={transition}
            className='information'>
              <div className='title'>Yasmeen Tariq</div>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
      
    </>
  )
}
