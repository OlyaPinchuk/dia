import '../../App.css'
import all from '../../images/all_in_one.svg'

const CardAdvantageComponent = ({advantage}) => {

    const images = {
        all : require('../../images/all_in_one.svg').default,   
    }

    const img = images[advantage.imageUrl]
   

    return (
        
    <div className='row-card card-active' >
        <img src={img}/>
        <div className='card-content'>
            <h4>{advantage.title}</h4>
            <div>{advantage.content}</div>
        </div>
    </div>
)}

export default CardAdvantageComponent;