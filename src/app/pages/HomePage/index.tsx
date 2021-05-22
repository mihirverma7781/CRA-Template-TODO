import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Todo } from 'app/components/Todo';
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className=" font-mono text-white  w-full  flex justify-center items-center">
        <Todo />
      </div>
    </>
  );
}
