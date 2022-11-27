import React from 'react';
import {Card} from './components/Card';


export const Shows = () => {
  return (
    <div className='flex flex-wrap ml-20 mt-6 md:ml-32'>
      <Card backgroundImage = "assets/musical.png" name="Classic Musical"/>
      <Card backgroundImage = "assets/comedy.png" name="Stand-Up Comedy"/>
      <Card backgroundImage = "assets/historic.png" name="History"/>
      <Card backgroundImage = "assets/cultural.png" name="Cultural"/>
      <Card backgroundImage = "assets/romance.png" name="Classic Stories"/>
      <Card backgroundImage = "assets/tragedy.png" name="Tragedy"/>

    </div>
  )
}
