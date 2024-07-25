import React, { createContext, useState, useContext } from 'react';

// Create a Context for user answers
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [userData, setUserData] = useState({
    username: '',
    attempts: 0,
    score: 0,
    status: ''
  });

  const updateUserAnswers = (index, answer) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [index]: answer
    }));
  };

  const updateUserData = (data) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userAnswers, updateUserAnswers, userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
