import React from "react";
import Button from "react-bootstrap/Button";
//
export default function SignOutButton() {
  //
  const handleSignoutRequest = () => {
  }
  //
  return (
    <Button
    variant="primary"
    type="submit"
    onSubmit={handleSignoutRequest}
  >
    Sign out 
  </Button>
  );
}
