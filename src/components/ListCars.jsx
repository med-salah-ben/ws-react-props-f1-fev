import React from 'react'
import { Button } from 'react-bootstrap'
import Car from './Car'

const ListCars = ({carsList , test , testCallBack}) => {
    let name ="Test Call Back Function";
    const handleMsg = (name , price) =>alert(`you have to pay ${price} to buy ${name}`)

  return (
    <div style={{display:"flex" ,flexDirection:"column", justifyContent:"center"}}>
    <div style={{display:"flex" ,  justifyContent:"space-around" , border:"blue 3px solid", margin:"5% 10%" , padding:"1rem"}}>
       {
        carsList.map((car,i)=>
        <Car OneCar={car} key={i} handleMsg={handleMsg}  />)
       }
    </div>
    <Button  onClick={()=>testCallBack(name)}>test Call Back</Button>
    </div>
  )
}

export default ListCars