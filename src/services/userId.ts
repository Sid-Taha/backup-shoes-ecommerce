// src\services\userId.ts
"use server"
import { client } from '@/sanity/lib/client';
import { auth, currentUser } from '@clerk/nextjs/server';

export default async function getUserInfo() {
  const { userId } = await auth();

  const user = await currentUser();

  if (!user) return null;

  return {
    image: user?.imageUrl,
    name: `${user.firstName} ${user.lastName}`,
    email: user?.emailAddresses[0].emailAddress,
    userId,
    lastSignIn: user?.lastSignInAt
  };
}

export async function userPostSanity(){
  const user = await getUserInfo()
  
  const res = await client.createOrReplace({
    _type: "user",
    _id: `user-${user?.userId}`,
    image: user?.image,
    name: user?.name,
    email: user?.email,
    userID: user?.userId,
    address:"",
    lastLogin: user?.lastSignIn
  })
  
  return (res.userID)
}