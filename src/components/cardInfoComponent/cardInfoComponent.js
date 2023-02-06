import './cardInfoComponent.css'

const CardInfoComponent = ({infoCard}) => {

    const images = {
        0 : require('../../images/one.svg').default,   
        1 : require('../../images/two.svg').default,   
        2 : require('../../images/three.svg').default,   
        3 : require('../../images/four.svg').default, 
        4 : require('../../images/five.svg').default, 
    }


    return (
        <div className='card card-active'>
              <h5>{infoCard.title}</h5>
              <div className='regions'>
                {infoCard.regions.map((element, index) => {
                    return <span key={index}>
                        {/* <img src={images[element.image]}/> */}
                        <img src={images[index]} alt='number'/>

                        {element.content}
                    </span>
                })}

              </div>
              <h5>{infoCard.headerBottom[0]}<span className='purple'>{infoCard.headerBottom[1]}</span></h5>

            </div>
    )
}

export default CardInfoComponent;