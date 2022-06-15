import React, {useEffect, useState} from 'react'
import { fetchUsers} from '../API/usersApi'
import UserItemB from './UserItemB'
import { Card, Container} from 'react-bootstrap'

const Users =  () =>  {
  const [usersData, setUsersData] = useState([])
useEffect(() =>{
fetchUsers().then(data => {
     setUsersData(data)})
}, [])

  return(
    <Container className='Users'
style={{width: 700, height: 800}}
>
{usersData.length === 0 ? <div>loading...</div> :
<Card >
<div>
{usersData.map(el=> <UserItemB key={el.id} user={el}/>)}
</div>
</Card>}
</Container>
  )
}
export default Users;
