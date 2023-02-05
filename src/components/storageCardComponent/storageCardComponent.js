import '../../App.css'
import rate1 from '../../images/rate1.svg'
import eye from '../../images/eye.svg'

const StorageCardComponent = ({storage}) => {

    const images = {
        storage1: require('../../images/storage1.svg').default,
        storage2: require('../../images/storage2.svg').default,
        storage3: require('../../images/storage3.svg').default,
        storage4: require('../../images/storage4.svg').default
    }

    return (
        <div  className='sixth-container-row-card card-active'>
              <img src={images[storage.image]} alt='storage'/>
              <div className='line-1'>
                <span>Склад 1</span>
                <img src={rate1} alt='rate'/>
              </div>
              <div className='line-2'>
                <span className='purple'>300 грн/кв.м.
                  <span className='min-price'>Мін. ціна</span>
                </span>
                <span>
                  <img src={eye} alt='eye'/>
                  <span className='views'>12 тис.</span>
                </span>
                
              </div>
            </div>
    )
}

export default StorageCardComponent;