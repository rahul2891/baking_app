import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Rahul', lastName: 'Verma', email:'rahul281191@gmail.com' }
  return (
    <section className='home'>
        <div className='home-content'>
        <header className='home-header'>
            <HeaderBox
            type='greeting'
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and mange your account and transactions efficiently"
             />

             <TotalBalanceBox
                accounts={[]}
                totalBanks ={1}
                totalCurrentBalance={1250.00}
              />
        </header>

        RECENT TRANSACTIONS
        </div>

        <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 500.23}, {currentBalance: 750.77}]}
      />
    </section>
  )
}

export default Home