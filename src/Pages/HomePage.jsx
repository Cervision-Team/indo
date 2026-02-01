import React from 'react'
import HomeHeader from '../Components/HomeComponents/HomeHeader/HomeHeader'
import KindSection from '../Components/HomeComponents/KindSection/KindSection'
import CompanySection from '../Components/HomeComponents/CompanySection/CompanySection'
import TrendCompanySection from '../Components/HomeComponents/TrendCompanySection'
import HelpSection from '../Components/HomeComponents/HelpSection/HelpSection'
import PartnerSection from '../Components/HomeComponents/PartnerSection/PartnerSection'
import FaqSection from '../Components/HomeComponents/FaqSection/FaqSection'

function HomePage() {
  return (
    <>
        <HomeHeader/>
        <KindSection/>
        <CompanySection/>
        <TrendCompanySection/>
        <HelpSection/>
        <PartnerSection/>
        <FaqSection/>
    </>
  )
}

export default HomePage