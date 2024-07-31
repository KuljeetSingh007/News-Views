import React from 'react';
import Globe from '../Globe.gif';
export default function Loading  () {

  return (
    <>
      <div className="text-center">
        <img style={{ margin: "0 0 100px 0" }} src={Globe} alt="loading" />
      </div>
    </>
  )
}
