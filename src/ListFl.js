import React, { useState } from 'react';
import friendList from './friendList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './listfl.css';

const ListFl = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Fungsi untuk memperbarui state pencarian berdasarkan input pengguna
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter daftar teman berdasarkan query pencarian
  const filteredFriends = friendList.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='container-fluid bekgron'>
      <div className='pt-3 w-100'>
        <h1>Top alat rizal</h1>
      </div>
      <div className='row'>
        {filteredFriends.map((friend, index) => (
          <div className='col-6 col-sm-2 px-3 py-1' key={index}>
            <div className=' py-2 flbox row h-100 justify-content-center fs-4 align-items-center d-flex overflow-hidden'>
              <div className='col-1'>{index + 1}</div>
              <div className='col'>{friend.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListFl;
