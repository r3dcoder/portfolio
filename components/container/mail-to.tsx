import React from 'react'

interface Props{
    email:string,
    subject:string,
    body:string,
    children:any
}

const Mailto = ({ email, subject, body, children }:Props) => {
  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
  );
};

export default Mailto;