const mixpanelToken = "9a9432edda95d53541aa76fd98bdb0bb";
mixpanel.init(mixpanelToken, {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

const Header = () => {
  const handleJoinBetaClick = (e) => {
    e.preventDefault();

    // Redirect to the survey
    window.location.href = 'https://qualtricsxmx3pmfphhl.qualtrics.com/jfe/form/SV_01jheiFaf6kU8Au';
  };

  return (
    <div className="navbar__container__fluid animate__animated animate__fadeIn">
      <div className="logo__section">
        <img
          src="assets/logo.svg"
          alt="Logo"
          width="100%"
          height="100%"
          className="d-inline-block align-top header__left__logo"
        />
      </div>
      <div className="content__section" style={{marginBottom: 100}}>
        <h1>
          Exclusive Task for Cat/Dog owners only (Pet food preferences):<br/> Survey + Product testing
        </h1>
        <p>
        <span style={{fontWeight: 'bold'}}>Please read the instructions in the survey carefully</span> to complete the task in full.
        <br/>
        Task suitable for Gmail users which will be requested. Survey is in Italian.
        <br/>
        <span style={{fontWeight: 'bold'}}>The task:</span> Start the Survey and read the instructions, install and test the app, Upload your Google data, Complete the pet survey, Get rewarded if all step are completed successfully.
        <br/>
        <span style={{fontWeight: 'bold'}}>Study objective:</span> Our research is to see if there are correlations between your pet food purchasing behaviour and your online activity. 
        <br/>
        <span style={{fontWeight: 'bold'}}>Rewards:</span> Completed Tasks will be manually reviewed, ensuring full completion. Rewards will be manually processed and added to your Rita wallet.
        </p>

        <div className="input__section">
          <div className="input-container animated fadeIn">
            <a className="demo-button" href="#" onClick={handleJoinBetaClick}>
              Start Survey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="container__wrapper">
      <Header />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
