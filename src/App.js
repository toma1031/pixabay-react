import React, {useState} from 'react';
import axios from 'axios'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList';

import logo from './logo.png';

const App = () => {
  const [images, setImages] = useState([]);
  const ApiKey = process.env.REACT_APP_PIXABAY_APIKEY;
  const onSerchSubmit = async (term) => {
    try {
      const params={
        key: ApiKey,
        q: term,
      };
      const response = await axios.get('https://pixabay.com/api/', {params});
      setImages(response.data.hits);
      if (response.data.total === 0) {
        window.alert('Can not find it');
      }
    }catch{
      window.alert('Faild to get it');
    }
  };
  return(
    <div className='ui container' style={{marginTop: '20px' }}>
      <img src={logo} alt='pixabay-logo' className='pixabay-logo' />
      <SearchBar onSubmit={onSerchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;