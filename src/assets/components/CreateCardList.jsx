import { useState } from 'react'
import CreateCard from './CreateCard.jsx'

function CreateCardList() {

    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: ""
    });


    return (
        <>
            <div className='d-flex flex-wrap justify-content-around'>
                {array.map(arrayel => (
                    <CreateCard
                        key={.id} />
                ))}
            </div>
        </>
    )
}

export default CreateCardList