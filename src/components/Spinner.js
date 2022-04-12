import React from 'react'
import loading from './images/loading.gif';
export default function Spinner() {
  return (
    <>
        <div className="text-center">
            <img src={loading} alt="Loading Itineraries" />
        </div>
    </>
  )
}