import React from 'react';
import { auth, currentUser } from '@clerk/nextjs/server';
import { LuUser2 } from 'react-icons/lu';

async function UserIcon() {
  // auth is synchronous. whenever we need only user id
  // const { userId } = auth();

  // current user is asynchronous
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    );
  }
  return (
    <LuUser2 className="w-6 h-6 rounded-full object-cover bg-primary text-white" />
  );
}

export default UserIcon;
