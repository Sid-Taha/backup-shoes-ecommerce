export const userSchema = {
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {
      name: 'image',
      type: 'url',
      title: 'Image URL',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'userID',
      type: 'string',
      title: 'User ID',
    },
    
    {
      name: 'password',
      type: 'string',
      title: 'Password',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
    },
    {
      name: 'lastLogin',
      type: 'number',
      title: 'Last Log-In',
    },
  ],
};
