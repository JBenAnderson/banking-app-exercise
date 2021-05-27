function CreateAccount() {
  const ctx = React.useContext(UserContext);
  return (
    <h1>
      Create Account
      {JSON.stringify(ctx)}
    </h1>
  );
}
