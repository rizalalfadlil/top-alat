import React, { useState, useEffect } from 'react';
import friendList from './friendList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './listfl.css';

const ListFl = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredIndices, setFilteredIndices] = useState([]);

  // Fungsi untuk memperbarui state pencarian berdasarkan input pengguna
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    // Filter daftar teman berdasarkan query pencarian
    const filteredIndices = friendList.reduce((acc, friend, index) => {
      if (friend.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        acc.push(index);
      }
      return acc;
    }, []);
    setFilteredIndices(filteredIndices);
  }, [searchQuery]);

  return (
    <div className='container-fluid bekgron'>
      <div className='row'>
        <h1 className='mt-3'>Top alat Rizal</h1>
        <div className='col mb-3'>
          <input
            type='text'
            className='search fs-4 p-2 w-100'
            placeholder='Cari alat...'
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className='row'>
        {filteredIndices.map((index) => (
          <div className='col-6 col-sm-2 px-3 py-1' key={index}>
            <div className=' py-2 flbox row h-100 justify-content-center fs-4 align-items-center d-flex overflow-hidden'>
              <div className='col-1'>{index + 1}</div>
              <div className='col'>{friendList[index].name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListFl;
