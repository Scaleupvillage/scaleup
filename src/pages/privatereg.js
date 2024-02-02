import Register from "@/Components/Register";
import { useState } from 'react';
const PrivateReg = ()=> {
const [openModal, setOpenModal] = useState(false);
return (
<Register setShow={setOpenModal} /> 
)
}

export default PrivateReg;
