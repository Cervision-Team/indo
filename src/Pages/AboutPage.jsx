import React from 'react'
import AboutHeader from '../Components/AboutComponents/AboutHeader/AboutHeader'
import AboutUsSection from '../Components/AboutComponents/AboutUsSection/AboutUsSection'
import AboutTextSection from '../Components/AboutComponents/AboutTextSection/AboutTextSection'
import AboutAlbum from '../Components/AboutComponents/AboutAlbum/AboutAlbum'
import AboutTeam from '../Components/AboutComponents/AboutTeam/AboutTeam'

function AboutPage() {
  return (
    <>
        <AboutHeader/>
        <AboutUsSection/>
        <AboutTextSection/>
        <AboutAlbum/>
        <AboutTeam/>
    </>
  )
}

export default AboutPage