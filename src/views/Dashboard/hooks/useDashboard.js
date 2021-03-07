
import { useState } from 'react';

const useCountry = () => {
  const [country] = useState('IN')
  return country
}

export default useCountry;



