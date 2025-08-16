import React from 'react'

export default function ErrorMessage({ message }) {
  if (!message) return null
  return (
    <div role="alert" className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
      {message}
    </div>
  )
}
