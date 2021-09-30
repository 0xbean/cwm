import React, { useEffect } from 'react';
import Router from 'next/router';

export default function SeminarsPage() {
  useEffect(() => {
    Router.push('/under-construction');
  });

  return (
    <>
      <div className="test">Hello</div>
    </>
  );
}
