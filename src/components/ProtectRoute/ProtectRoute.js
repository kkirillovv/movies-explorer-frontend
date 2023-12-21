import React from "react"
import { Navigate } from "react-router-dom"

export default function ProtectRoute({element: Component, page, ...props}) {
  return (
    props.loggedIn ? <Component element={ page } {...props} /> : <Navigate to="/" replace />
  )
}