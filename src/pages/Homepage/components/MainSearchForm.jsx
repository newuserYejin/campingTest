import React, { useState }from 'react';
import './MainSearchForm.style.css';
import { Box, Input, Select, MenuItem, Stack, Button } from '@mui/material';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import {  FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { regions } from '../../../constants/sigungu';
import { search_detail_filters } from '../../../constants/info';

const MainSearchForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [keyword, setKeyword] = useState("")
  const navigate = useNavigate();
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  console.log("modalOpen222:", modalOpen,)

  const searchByKeyword = (e) => {
    e.preventDefault()//폼 제출시 새로고침 막음
      navigate(`/search?q=${keyword}&province=${selectedProvince}&city=${selectedCity}&theme=${selectedTheme}`)
      setKeyword("")
  }
  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setSelectedCity('')
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value)
  };

  const handleThemeChage = (e) => {
    setSelectedTheme(e.target.value)
  }
  const handleClickOpen = () => setModalOpen(true);
  const handleClickClose = () => setModalOpen(false);

  return (
    <>
      <Box component="form" noValidate="false" className='mainSearchForm' onSubmit={searchByKeyword}>
        <h3>캠핑장 검색</h3>
        <div className='formDiv'>
          <h4>키워드</h4>
          <div className='inputDiv'>
            <Input id="keyword" placeholder="키워드를 입력하세요" value={keyword} onChange={(e)=>{
              setKeyword(e.target.value)
            }}/>
          </div>
        </div>
        <div className='formDiv'>
        <h4>지역별</h4>
        <div className='inputDiv'>
          <Select value={selectedProvince} onChange={handleProvinceChange} displayEmpty>
            <MenuItem value=""><em>전체/도</em></MenuItem>
            {Object.keys(regions).map((province) => (
              <MenuItem key={province} value={province}>{province}</MenuItem>
            ))}
          </Select>
          <Select value={selectedCity} onChange={handleCityChange} displayEmpty>
            <MenuItem value=""><em>전체/시/군</em></MenuItem>
            {selectedProvince && regions[selectedProvince].map((city) => (
              <MenuItem key={city} value={city}>{city}</MenuItem>
            ))}
          </Select>
          </div>
      </div>
        <div className='formDiv'>
          <h4>테마별</h4>
          <div className='inputDiv'>
            <Select value={selectedTheme} onChange={handleThemeChage} displayEmpty>
              <MenuItem value="">전체테마</MenuItem>{
                search_detail_filters[4].labels.map((theme)=>(
                  <MenuItem key={theme.name} value={theme.name}>{theme.name}</MenuItem>
                ))
              }
            </Select>
          </div>
        </div>
        <div className="formBtnDiv">
          <Button type="submit" variant="contained">검색</Button>
          <Button type="button" variant="contained" onClick={() => handleClickOpen(true)}>상세 검색</Button>
        </div>
      </Box>
      <Dialog
        maxWidth="xl"
        open={ modalOpen }
        className='mainDetailSearchModal'
        onClose={() => handleClickClose()}
      >
        <DialogTitle
          component="h4" 
          sx={{
            padding:0,
            fontFamily:"'Spoqa Han Sans Neo', sans-serif",
            fontSize: "1.25rem",
            lineHeight:1.25,
            marginBottom:"2rem",
          }}
        >
          원하는 캠핑장을 좀 더 상세하게 검색해보세요.
        </DialogTitle>
        <DialogContent>
          {search_detail_filters.map((filter) => 
            <FormGroup key={filter.id}>
              <h5>{filter.name}</h5>
              <ul>
                {filter.labels.map((label) => 
                  <li key={label.id}>
                    <FormControlLabel
                      label={label.name}
                      control={<Checkbox />}
                      name={filter.id}
                      id={label.id}
                    />
                  </li>
                )}
              </ul>
            </FormGroup>
          )}
          <Stack spacing={2} direction="row" className='formBtnDiv'>
            <Button type="button" className='btn_search'>검색</Button>
            <Button type="button" className='btn_reset'>초기화</Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default MainSearchForm