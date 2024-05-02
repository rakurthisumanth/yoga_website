import React from 'react';

const IconWithText = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2">
        {icon}
      </div>
      <div className="text-lg font-medium text-gray-800">{text}</div>
    </div>
  );
};

const IconsWithText = () => {
  return (
    <div className="flex justify-center items-center w-full p-8">
      <IconWithText
        icon={<svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
        text="Qualified Instructors"
      />
      <IconWithText
        icon={<svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
        text="Enrolled Members"
      />
      <IconWithText
        icon={<svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
        text="Session"
      />
      <IconWithText
        icon={<svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.485 2.243L18 14l2.485 1.243L15 16l-.743 4.485L14 18l-1.243 2.485L12 16l-4.485 2.243L10 18l-2.485-1.243L9 16l.743-4.485L10 10l-4.485-2.243L6 10l-2.485-1.243L9 6l-.743-4.485L10 2l1.243-2.485L12 6l4.485-2.243L14 2l1.243 2.485L18 6l-.743 4.485L18 14l2.485-1.243L18 10z" /></svg>}
        text="Happy Customers"
      />
    </div>
  );
};

export default IconsWithText;
