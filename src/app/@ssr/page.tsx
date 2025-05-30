import React from 'react'

export default function Page() {
  // Generate a random number between 1 and 100 (inclusive).
  const randomNumber = crypto.getRandomValues(new Uint32Array(1))[0] % 100 + 1;

  return <div>Random Number: {randomNumber}</div>
}
