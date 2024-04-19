import React, { useState } from 'react';
import './TagSearch.style.css';
import { Box, FormGroup, FormControlLabel, Checkbox , Button } from '@mui/material';
import { search_tags } from '../../../constants/info';
import { useTagSearchQuery } from '../../../hooks/useTagSearch';
import { useNavigate } from 'react-router-dom';

const TagSearch = () => {
//searchTag의 id와 selectedTag의


  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  const selectedTag = []

  const searchByTag = (e) => {
    e.preventDefault()//폼 제출시 새로고침 막음
      navigate(`/search?q=`)
  }

  const { data, isLoading, isError, error } = useTagSearchQuery({page})
    console.log('data?', data)

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <h3>Error: {error.message}</h3>;
    }


  return (
    <Box component="form" className='TagSearch' onSubmit={searchByTag}>
      <h3>태그로 찾는 나만의 캠핑장</h3>
      <ul>
        {search_tags.map((tag) => 
          <li key={tag.id}>
            <FormControlLabel
              label={tag.text}
              control={<Checkbox />}
              name={tag.id}
              id={tag.id}
            />
          </li>
        )}
      </ul>
      <Button>초기화</Button>
      <Button type='submit'>검색</Button>
    </Box>
  )
}

export default TagSearch