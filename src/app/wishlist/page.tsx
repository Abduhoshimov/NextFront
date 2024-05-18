"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import DataTable from './components/dataTable';

const FavoritePage = () => {
    const { likeItem } = useSelector((state: any) => state.like);
    console.log(likeItem);

    return (
        <div className='container'>
            <div>
                <DataTable data={likeItem} />
            </div>
        </div>
    )
}

export default FavoritePage