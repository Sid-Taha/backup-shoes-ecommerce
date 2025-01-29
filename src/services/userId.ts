// src\services\userId.ts
"use server"
import { client } from '@/sanity/lib/client';
import { auth, currentUser } from '@clerk/nextjs/server';

export default async function getUserInfo() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!user) return null;

  return {
    userId,
    name: `${user.firstName} ${user.lastName}`,
    email: user.emailAddresses.find(e => e.id === user.primaryEmailAddressId)?.emailAddress,
  };
}

export async function userPostSanity(){
  const user = await getUserInfo()
  
  const res = await client.createOrReplace({
    _type: "user",
    _id: `user-${user?.userId}`,
    name: user?.name,
    userID: user?.userId,
    email: user?.email,
    address:"",
  })
  
  return (res.userID)
}