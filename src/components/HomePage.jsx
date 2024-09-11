import React from 'react'
import Features from './Features'
import Hero from './Hero'
import Listings from './Listings'
import RecentTrips from './RecentTrips'

export default function HomePage() {
  return (
    <>
      <Hero/>
      <Listings/>
      <Features/>
      <RecentTrips/>
    </>
  )
}
