import React from 'react'
import NavBar from './NavBar'
import DashBoard from './DashBoard'
import { RecoilRoot } from 'recoil'
import CreateBoard from './CreateBoard'
import CompleteBoard from './CompleteBoard'
import OrganiseBoard from './OrganiseBoard'
import MultiSection from './MultiSection'
import TagWiseBoard from './TagWiseBoard'

export default function StartedPage() {
  return (
    <div>
      <RecoilRoot>
        <NavBar />
        <DashBoard />
        <CreateBoard />
        <CompleteBoard />
        <OrganiseBoard />
        <MultiSection />
        <TagWiseBoard />
      </RecoilRoot>
    </div>
  )
}
