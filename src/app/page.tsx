import { Button } from '@/components/ui/button';
import { UserButton, auth } from '@clerk/nextjs';
import { LogIn } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <div className='w-screen min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col items-center text-center'>
          <div className='flex items-center'>
            <h1 className='mr-3 text-5xl font-semibold text-slate-50'>
              Chat with any PDF
            </h1>
            <UserButton afterSignOutUrl='/' />
          </div>

          <div className='flex mt-4'>
            {isAuth && <Button variant='secondary'>Go to Chats</Button>}
          </div>

          <p className='max-w-xl mt-4 text-large text-slate-100'>
            Join millions of students, researchers and professionals to
            instantly answer questions and understand research with AI.
          </p>

          <div className='w-full mt-4'>
            {isAuth ? (
              <h1>FILE UPLOAD</h1>
            ) : (
              <Link href='/sign-in'>
                <Button variant='outline'>
                  Login to get started!
                  <LogIn size={16} className='ml-2' />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
