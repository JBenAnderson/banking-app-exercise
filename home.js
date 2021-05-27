function Home() {
  const ctx = React.useContext(UserContext);

  return (
    <h1>
      Home
      {JSON.stringify(ctx)}
    </h1>
  );
}
