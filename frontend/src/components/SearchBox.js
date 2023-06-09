import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const SearchBox = () => {
    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()){
            navigate(`/search/${keyword}`)
        }
        else{
            navigate('/')
        }

    }
  return (
    <Form onSubmit={submitHandler} className='d-flex'>
        <Form.Control
            className='mr-sm-2 ml-sm-5'
            type='text'
            name='q'
            placeholder='Search Products...'
            onChange={(e)=> setKeyword(e.target.value)}>
        </Form.Control>
        <Button type='submit' variant='outline-success' className='p-2 mx-1'>Search</Button>

    </Form>
  )
}

export default SearchBox