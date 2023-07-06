import gym from '../../assets/icons/gym.png'
import ListOfBodyPartsHook from '../../custom-hook/Home/list-of-body-parts-hook'
import { Spinner } from 'react-bootstrap'

const ListOfBodyParts = () => {


   const [parts, loadingParts, handleClick] = ListOfBodyPartsHook()


   return (
      <div className="list-of-body-parts mt-5">
         <div className="container">
            <div className="fs-2 text-capitalize fw-bold">
               parts of body
               <img src={gym} alt="" />
            </div>

            <div className="parts">
               {
                  loadingParts ?
                     <div className="d-flex justify-content-center align-items-center w-100">
                        <Spinner animation="grow" variant="danger" />
                     </div>
                     :
                     
                     parts && parts.status === 200 && parts.data.length ?
                        parts.data.map((part, index) => {
                        return <div onClick={() => handleClick(part)} style={{cursor: 'pointer'}} className='part' key={index} > {part} </div>
                     }) 
                  
                     : <div className="alert alert-danger text-center w-100 fs-2 text-capitalize fw-bold">
                     Error can't load data from server 😥
                  </div>
               }
            </div>

         </div>

      </div>
   )
}

export default ListOfBodyParts