'use client'
import { UserButton,useUser } from "@clerk/nextjs";






export default function Dashboard() {

  

const user=useUser()
console.log(user)
console.log("email :" , user.user?.emailAddresses[0].emailAddress)







  return (


    <>
      <h1>DashboardHome</h1>

      <div>

        <UserButton afterSignOutUrl="/" />

      </div>


    </>

  )
}