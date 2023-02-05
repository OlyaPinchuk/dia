import '../../App.css'
// import all from '../../images/all_in_one.svg'

const CardAdvantageComponent = ({advantage}) => {

    const images = {
        all : require('../../images/all_in_one.svg').default,   
        business_process : require('../../images/business_process.svg').default,   
        verified_members : require('../../images/verified_members.svg').default,   
        easy_to_use : require('../../images/easy_to_use.svg').default,   


    }

    const img = images[advantage.imageUrl]
   

    return (
        
    <div className='row-card card-active' >
        {advantage.imageLeft && <img src={img} alt='decorative'/>}
        <div className='card-content'>
            <h4>{advantage.title}</h4>
            <div>{advantage.content}</div>
        </div>
        {!advantage.imageLeft && <img src={img} alt='decorative'/>}
    </div>
)}

export default CardAdvantageComponent;