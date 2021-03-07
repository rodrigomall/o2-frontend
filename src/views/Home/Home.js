import React, { useState } from 'react';
import HomeBoard from './HomeBoard';
import HomeHeader from './HomeHeader';
import HomeModal from './HomeModal';

const Home = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const propsHeader = {
    toggleModal
  }

  const propsModal = {
    modal,
    setModal,
    toggleModal
  }

  return (
    <>
      <HomeHeader  {...propsHeader} />
      <HomeBoard />
      { modal &&
        <HomeModal {...propsModal} />
      }
    </>
  )
}

export default Home;
