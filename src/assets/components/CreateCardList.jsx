import { useState } from 'react'
import CreateCard from './CreateCard.jsx'

function CreateCardList() {

    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: ""
    });

    function HandleData(e) {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });




    }


    return (
        <>
            <div className='d-flex flex-wrap justify-content-around'>
                <div className='d-flex'>
                    <form>
                        <div className="row mb-3 row-cols-2">
                            <div className='col'>
                                <input type="text"
                                    name='author'
                                    className="form-control"
                                    placeholder="Write the author here"
                                    value={formData.author}
                                    onChange={HandleData}
                                />
                            </div>
                            <div className="col">
                                <input
                                    name="title"
                                    type="text"
                                    className="form-control"
                                    placeholder="Write the title here"
                                    value={formData.title}
                                    onChange={HandleData}
                                />
                            </div>
                            <div className="col my-3">
                                <input
                                    name='body'
                                    type="text"
                                    className="form-control"
                                    placeholder='Write the body here'
                                    value={formData.body}
                                    onChange={HandleData}
                                />
                            </div>
                            <div className="my-4 form-check">
                                <input type="checkbox" className="form-check-input mx-2" /><p>Public</p>
                            </div>
                            {/*<button type="submit" className="btn btn-primary my-4">Submit</button>*/}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateCardList