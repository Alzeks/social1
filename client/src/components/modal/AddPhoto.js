import React, {useContext, useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Context} from '../../index'
import {Col, Container, Button, Row, Dropdown, Form} from 'react-bootstrap'
import { updateUser, getOneUser} from '../../API/usersApi'
import {observer} from 'mobx-react-lite'

const AddUser = observer( ({show, onHide}) => {
  const {userStore} = useContext(Context)
  const [info, setInfo] = useState([])
  const [file, setFile] = useState(null)
   const [name, setName] = useState('ok')

  const addInfo = () => setInfo(  [...info,
    {title: '', description: '', number: Date.now()}]
    )
    const deleteInfo = (number) =>  {
      setInfo(info.filter(el => el.number !== number))
    }
    const changeInfo = (key, value, number) => {
setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
console.log(info);
    }
    const selectFile = e => {
      setFile(e.target.files[0])

    }
    const update_User = () => {////???(info)
    const  formData = new FormData()
    //formData.append('name', name)
    formData.append('img', file)
    formData.append('id', userStore.mainUser.id)
    //formData.append('info', JSON.stringify(info))
    updateUser(formData).then(data =>{
      console.log(data);
    getOneUser(userStore.mainUser.id).then(data =>{
      console.log(data)
      userStore.setMainUser(data)})
       onHide()})
    }

  return (
    <Modal show={show} onHide={onHide} size='lg' cantered>
    <Modal.Header closeButton>
  <Modal.Title className='d-flex justify-content-center align-item-center'
  >Add photo
  </Modal.Title>
  </Modal.Header>
  <Modal.Body>
<Form>
<Form.Control placeholder type='file' placeholder='enter image'
      onChange={selectFile}/>

<button type="button" className="btn btn-primary"
       onClick={addInfo}>add characteristic</button>
{info.map(el => <Row className='mt-2' key={el.namber}>
<Col md={4}><Form.Control placeholder='enter name'
   value={el.title}
   onChange={(e)=>changeInfo('title', e.target.value, el.number)}/>
</Col>
<Col md={4}><Form.Control placeholder='enter description'
  value={el.description}
  onChange={(e)=>changeInfo('description', e.target.value, el.number)}/>
</Col>
<Col md={4}>
<Button variant={'outline-danger'}
       onClick={() => deleteInfo(el.number)}>delete</Button>
</Col>
</Row>
)}

</Form>
  </Modal.Body>
  <Modal.Footer>
  <button type="button" className="btn btn-secondary"
  onClick={onHide}>Close
  </button>
  <button type="button" className="btn btn-primary"
          onClick={update_User}>Update Setting
  </button>
  </Modal.Footer>
  </Modal>
);
})
export default AddUser;
