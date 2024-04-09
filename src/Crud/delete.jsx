
import react from 'react';
import {useEffect,useState} from 'react';


import axios from 'axios';
 
function Delete()
{
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
 
    const [checked, setChecked] = useState('false');
    const [id, setId] = useState('');
 
    useEffect( () =>{
        async function fetchData() {
            let details = window.location?.pathname?.split('/')
            console.log(details)
            let user_id = details[details?.length - 1]
         await axios.get(`${import.meta.env.VITE_API_DUPLICATE_URL}/Mock`+user_id)
            setName(res.data.name);
          }
          fetchData();
          console.log(name)
      },[])
 
    return(
        <>
        <h3>Update</h3>
        <Form>
            <Form.Field>
                <label>Name</label>
                <input type='text' value={name}  onChange={event => setName(event.target.value)} placeholder='Name'/>
            </Form.Field>
            <Form.Field>
                <label>Mail</label>
                <input type='text' onChange={event => setMail(event.target.value)} value={mail} placeholder='Mail'/>
            </Form.Field>
            <Form.Field>
            <Checkbox name="checked" checked={checked}  onChange={event => setChecked(event.target.value)} label="Agree to the Terms and Conditions"/>
            </Form.Field>
            <button>Submit</button>
        </Form>
        </>
    )
}
 
export default Delete;