import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";


import Style from "./index.module.css"
import { useNavigate, useOutletContext } from "react-router-dom";
import Swal from "sweetalert2";
import { useBasketContext } from "../../globalCompanent/BasketContext";
///////////////////////////////////////////////
import { useEffect, useState } from "react"
//Table//
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, Space, Table } from 'antd';
import { useRef} from 'react';
import Highlighter from 'react-highlight-words';
// import Swal from "sweetalert2";

// Modal//
// import { Button } from 'antd';



const Favorites = () => {
  const[favorites, setFavorites] = useBasketContext()
  const navigate = useNavigate()

  useEffect(()=>{
  
    let previousfavorites = JSON.parse(localStorage.getItem("favorites"))
    setFavorites(previousfavorites);
  },[])

  
  
  ///////////////////////////////////////////////
  
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter              
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
          />
          ) : (
            text
            ),
          });
          const columns = [
            {
              title: 'ID',
              dataIndex: 'id',
              key: 'id',
              width: '10%',
              sorter: (a, b) => a.id - b.id,
              sortDirections: ['descend', 'ascend'],
            },
            {
              ...getColumnSearchProps('name'),
              title: 'Full Name',
              render: (value) => (value.name  +"  "+ value.surname),
              width: '20%',
              key: 'name',
              sorter: (a, b) => a.name - b.name,
              sortDirections: ['descend', 'ascend'],
              
            },
    {
      title: 'Age',
      dataIndex:'age',
      sorter: (a, b) => a.age - b.age,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'image',
      dataIndex:'image',
      render:  image  => <img className={Style.image} alt={image}  src={image}/>,
    },
    ,
    {
      title: 'Salary',
      dataIndex: 'salary',
      sorter: (a, b) => a.salary - b.salary,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      ...getColumnSearchProps('position'),
    },
    {
      title: 'Delete',
      render: (value) => (
        <Button type="primary" danger ghost onClick={()=>{
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
      let newSuployes = favorites.filter((item) => item.id !== value.id);
localStorage.setItem("favorites",JSON.stringify(newSuployes))
setFavorites(newSuployes)
      }})
        }}>
       <DeleteOutlined/>
      </Button>
      )
    },
   
  ];
  return (


<>
<div
      style={{
        // height: "80vh",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3>You Have {favorites.length} employees</h3>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => {
          if (localStorage.getItem("favorites")) {
            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
                JSON.parse(localStorage.getItem("favorites"),
                localStorage.removeItem("favorites")
                );
                setFavorites([])
                navigate("/employees")
              }
            })
          }
        }}
      >
        CLEAR ALL?
      </Button>
    </div>
    <Table key={favorites.id} className={Style.table} columns={columns} dataSource={favorites} />
</>
  );
};

export default Favorites;
