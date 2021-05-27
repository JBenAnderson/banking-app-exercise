function Spa() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/CreateAccount/" component={CreateAccount} />
        <Route path="/alldata/" component={AllData} />
        <Route path="/login/" component={Login} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/balance/" component={Balance} />
      </HashRouter>
    </>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));

//COMMENTED OUT FROM INSIDE NAVBAR (MOVED FOR TESTING ONLY)
/*      <Route path="/login/" component={Login} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/balance/" component={Balance} /> */
