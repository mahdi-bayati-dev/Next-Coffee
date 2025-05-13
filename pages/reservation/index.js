import PageHeader from '@/components/modules/PageHeader/pageHeader'
import ReservationDetail from '@/components/templates/Reservation/ReservationDetail'
import React from 'react'

function Reservation() {
  return (
    <>
    <PageHeader route={'Reservation'} />
    <ReservationDetail/>
    </>
  )
}

export default Reservation