import React from 'react'
import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { InfiniteScrolling } from './InfiniteScroll'
import { Login } from './Login'
import { Navbar } from './Navbar'

export const AllRoutes = () => {

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/infinite-scroll" element={<InfiniteScrolling />}></Route>
                <Route path="/home" element={<Login />}></Route>
            </Routes>
        </div>
    )
}
