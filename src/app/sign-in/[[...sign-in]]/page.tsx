import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='md:h-screen flex justify-center md:items-center'><SignIn /></div>
}