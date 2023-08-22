const Header = () => {
  return (
    <header className="header">
      <img src="assets/logo_blue.svg" alt="Logo" className="logo" />
      <span className="company-name">Rita Data</span>
    </header>
  );
};

const Footer = ({
  step,
  onClickPrev,
  onClickNext,
  shouldIncludeButtons,
  isNextDisabled,
  shouldIncludeSteps,
  isLoading,
}) => {
  const Typography = window.antd.Typography;
  const Button = window.antd.Button;
  const { Text } = Typography;

  return (
    <footer className="footer">
      <Text type={"secondary"} style={{ fontSize: 20 }}>
        {shouldIncludeSteps ? `${step}/3` : ""}
      </Text>
      {shouldIncludeButtons ? (
        <div style={{ display: "flex", gap: 16 }}>
          <Button
            type={"secondary"}
            size={"large"}
            onClick={() => {
              onClickPrev();
            }}
          >
            ← Back
          </Button>
          <Button
            disabled={isNextDisabled}
            size={"large"}
            style={{ width: 250 }}
            loading={isLoading}
            type={"primary"}
            onClick={() => {
              onClickNext();
            }}
          >
            {step === 6 ? "Restart" : "Next"} →
          </Button>
        </div>
      ) : null}
    </footer>
  );
};

const StepState = ({ step }) => {
  const steps = [
    {
      title: "First",
    },
    {
      title: "Second",
    },
    {
      title: "Last",
    },
  ];

  const Steps = window.antd.Steps;
  const theme = window.antd.theme;

  const { token } = theme.useToken();
  token.colorPrimary = "#5359d5";
  token.colorPrimaryHover = "#8084f2";
  token.fontSize = 16;

  const items = steps.map((item) => ({
    key: item.title,
  }));

  return (
    <>
      <Steps current={step - 1} items={items} />
    </>
  );
};

const FirstPage = ({ onSubmit }) => {
  const Typography = window.antd.Typography;
  const Form = window.antd.Form;
  const Input = window.antd.Input;
  const Button = window.antd.Button;
  const { Title, Text, Link } = Typography;
  const [form] = Form.useForm();

  const onFinish = (value) => {
    onSubmit(value.email);
  };

  const onFinishFailed = () => {
    // message.error('Submit failed!');
  };

  return (
    <div className="page1">
      <header className={"headerText"}>
        <Title style={{ marginBottom: 0, fontSize: 42 }}>Welcome to Rita</Title>
        <Text type="secondary" style={{ color: "#64748B", fontSize: 24 }}>
          Let's find out which competitors you are losing customers to.
        </Text>
      </header>

      <Form
        className={"form"}
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        validateMessages={{
          types: { email: "Please enter a valid email" },
          required: "Email is required",
        }}
      >
        <div className={"formBody"}>
          <Form.Item
            name="email"
            label="Sign up with your work email"
            rules={[{ required: true }, { type: "email", warningOnly: false }]}
          >
            <Input size={"large"} placeholder="you@company.com" />
          </Form.Item>
          <Form.Item>
            <Button
              size={"large"}
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
            >
              Start →
            </Button>
          </Form.Item>
        </div>
      </Form>

      <Text type="secondary" style={{ textAlign: "center", marginBottom: 8 }}>
        By continuing, you agree with Rita's
        <br />
        <Link
          href="https://ritapersonaldata.com/privacypolicy.html"
          target="_blank"
          style={{ color: "#5455e5" }}
        >
          Privacy Policy
        </Link>
        <br />
        Copyright © Rita Data B.V.
      </Text>
    </div>
  );
};

const GlobeSvg = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5ZM0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03757 0.5 11.5 2.96243 11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6Z"
        fill="#8B5CF6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 6C0.5 5.72386 0.723858 5.5 1 5.5H11C11.2761 5.5 11.5 5.72386 11.5 6C11.5 6.27614 11.2761 6.5 11 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6Z"
        fill="#8B5CF6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.50012 6.00005C4.53438 7.53747 5.06313 9.01763 6 10.2247C6.93687 9.01763 7.46562 7.53747 7.49988 6.00005C7.46562 4.46263 6.93687 2.98248 6 1.77545C5.06313 2.98248 4.53438 4.46263 4.50012 6.00005ZM6 1.00005L5.63083 0.662842C4.29845 2.12151 3.54126 4.01448 3.50011 5.98964C3.49996 5.99658 3.49996 6.00353 3.50011 6.01047C3.54126 7.98563 4.29845 9.8786 5.63083 11.3373C5.72556 11.441 5.85954 11.5001 6 11.5001C6.14046 11.5001 6.27444 11.441 6.36917 11.3373C7.70155 9.8786 8.45874 7.98563 8.49989 6.01047C8.50004 6.00353 8.50004 5.99658 8.49989 5.98964C8.45874 4.01448 7.70155 2.12151 6.36917 0.662842L6 1.00005Z"
        fill="#8B5CF6"
      />
    </svg>
  );
};

const XMarkIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      width={20}
      height={20}
    >
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  );
};

const CompanyBox = ({ name, onRemove }) => {
  const Button = window.antd.Button;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "between",
        alignItems: "center",
        padding: 8,
        width: "fit-content",
        border: "solid",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#e5e7eb",
        position: "relative",
      }}
      className={"company-box"}
    >
      <GlobeSvg />

      <span style={{ marginLeft: 8 }}>{name}</span>

      <Button
        className={"x-button"}
        type={"secondary"}
        onClick={() => {
          onRemove(name);
        }}
        icon={<XMarkIcon />}
        style={{
          position: "absolute",
          top: -13,
          right: -5,
          width: 20,
          height: 20,
        }}
      ></Button>
    </div>
  );
};

const SecondPage = ({ onCompanySelect, onRemove }) => {
  const Typography = window.antd.Typography;
  const { Title, Text } = Typography;

  const [selectedCompany, setSelectedCompany] = React.useState(null);

  return (
    <div className="page1">
      <header className={"headerText"}>
        <Title style={{ marginBottom: 0, fontSize: 42 }}>
          Tell us about your company.
        </Title>
        <Text type="secondary" style={{ color: "#64748B", fontSize: 24 }}>
          Select your company website name, so we can track your customer
          behaviours.
        </Text>
      </header>

      {selectedCompany ? (
        <CompanyBox
          name={selectedCompany}
          onRemove={() => {
            setSelectedCompany(null);
            onRemove();
          }}
        />
      ) : null}

      <div className="form">
        <SearchCompanyInput
          size={"large"}
          style={{ width: "20%" }}
          onSelectedCompany={(website) => {
            onCompanySelect(website);
            setSelectedCompany(website);
          }}
        />
      </div>
    </div>
  );
};

const ThirdPage = ({ onCompanySelect, onRemove }) => {
  const Typography = window.antd.Typography;
  const { Title, Text } = Typography;

  const [selectedCompanies, setSelectedCompanies] = React.useState([]);

  return (
    <div className="page1">
      <header className={"headerText"}>
        <Title style={{ marginBottom: 0, fontSize: 42 }}>
          Who are your competitors?
        </Title>
        <Text type="secondary" style={{ color: "#64748B", fontSize: 24 }}>
          Select at least 3 competitors, next we'll show you the magic...
        </Text>
      </header>

      {selectedCompanies.length ? (
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            flexDirection: "row",
            gap: 16,
            overflowX: "scroll",
            width: "30%",
            paddingTop: 5,
          }}
        >
          {selectedCompanies.map((company) => {
            return (
              <CompanyBox
                key={company}
                name={company}
                onRemove={() => {
                  setSelectedCompanies((prev) =>
                    prev.filter((item) => item != company)
                  );
                  onRemove(company);
                }}
              />
            );
          })}
        </div>
      ) : null}

      <div className="form">
        <SearchCompanyInput
          size={"large"}
          style={{ width: "20%" }}
          onSelectedCompany={(website) => {
            onCompanySelect(website);
            setSelectedCompanies((prev) => [website, ...prev]);
          }}
        />
      </div>
    </div>
  );
};

const LPIPage = ({ lpiData, targetWebsite, onClickNext }) => {
  const Typography = window.antd.Typography;
  const Button = window.antd.Button;

  const { Title, Text } = Typography;
  const svgRef = React.useRef();

  const [lostVolume, setLostVolume] = React.useState(0);
  const [competitors, setCompetitors] = React.useState([]);

  React.useEffect(() => {
    if (svgRef.current && document.querySelector(`#${targetWebsite}`)) {
      const svgDim = document.querySelector("#lol1").getBoundingClientRect();

      const firstBarDim = document
        .querySelector("#" + targetWebsite)
        .getBoundingClientRect();

      d3.select("#linkGroup").remove();

      const linkGroup = d3
        .select(svgRef.current)
        .append("g")
        .attr("id", "linkGroup");

      const startX = firstBarDim.x + firstBarDim.width - svgDim.x;
      let startY = firstBarDim.y - svgDim.y;

      competitors.map((company) => {
        let secondBar = document.querySelector(
          "#destination" + company.website
        );

        if (secondBar) {
          const secondBarDim = secondBar.getBoundingClientRect();

          const start2X = secondBarDim.x - svgDim.x;
          const start2Y = secondBarDim.y - svgDim.y;

          const link = {
            source: {
              x: startX,
              y0: startY,
              y1: startY + firstBarDim.height * (company.volume / 100),
            },
            target: {
              x: start2X,
              y0: start2Y,
              y1: start2Y + secondBarDim.height,
            },
          };

          const path = sankeyLinkPath(link);

          linkGroup.append("path").attr("d", path).attr("fill", "#6366F126");

          startY = link.source.y1;
        }
      });
    }
  }, [svgRef, competitors]);

  React.useEffect(() => {
    if (lpiData && lpiData["result"]) {
      const totalVisitTarget = lpiData["result"]["total_visits"];
      const competitors = lpiData["result"]["2h"];
      let totalLost = 0;

      for (const [key, value] of Object.entries(competitors)) {
        totalLost += value;
      }

      const lost = (totalLost / totalVisitTarget) * 100;
      setLostVolume(lost.toFixed(2));

      const competitorsData = [];

      for (const [key, value] of Object.entries(competitors)) {
        const volume = ((value / totalLost) * 100).toFixed(2);
        competitorsData.push({ website: key, volume: volume });
      }

      setCompetitors(competitorsData);
    }
  }, [lpiData]);

  return (
    <div className="page1">
      <header
        className={"headerText"}
        style={{ justifyContent: "start", marginTop: 56, flexGrow: 0 }}
      >
        <Title style={{ marginBottom: 0, fontSize: 42 }}>
          <span style={{ color: "#f43f5e" }}>{lostVolume}%</span> of website
          visitors are <span style={{ color: "#f43f5e" }}>lost</span> to a
          competitor within 2h
        </Title>
        <Text type="secondary" style={{ color: "#64748B", fontSize: 24 }}>
          You are losing potential customers to your competition.
        </Text>
      </header>

      <div
        style={{
          display: "flex",
          flexGrow: 1,
          width: "100%",

          overflowX: "scroll",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
          gap: 16,
          padding: 48,
          paddingTop: 16,
        }}
      >
        <div
          style={{
            flex: "0 0 66.66%",
            border: "solid",
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "#e5e7eb",
            height: "100%",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "start",
            gap: "66%",
            padding: 48,
            paddingLeft: "10%",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <Title level={4}>{targetWebsite + " Visitors"}</Title>

            <div
              id={targetWebsite}
              style={{
                width: 40,
                height: "100%",
                backgroundColor: "#8B5CF6",
                borderRadius: 4,
              }}
            ></div>
          </div>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <Title level={4}>Competitors Lost To</Title>
            {competitors.map((competitor) => {
              return (
                <>
                  <div key={competitor.website}>
                    <span
                      key={competitor.website}
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#374151",
                      }}
                    >
                      {competitor.volume + "% "}
                    </span>
                    <span
                      key={competitor.website}
                      style={{
                        color: "#ADAFAA",
                        fontSize: 12,
                      }}
                    >
                      {competitor.website}
                    </span>
                  </div>
                  <div
                    key={competitor.website}
                    id={"destination" + competitor.website}
                    style={{
                      width: 40,
                      height: competitor.volume + "%",
                      backgroundColor: "rgb(247, 247, 254)",
                      borderRadius: "4px",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderColor: "#8B5CF6",
                    }}
                  ></div>
                </>
              );
            })}
          </div>
        </div>
        <div
          style={{
            flex: "0 0 33.33%",
            // border: "1px solid black",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: 48,
          }}
        >
          <Text
            type="secondary"
            style={{ color: "#64748B", fontSize: 24, textAlign: "center" }}
          >
            Learn why you are losing customers.
          </Text>

          <Button
            size={"large"}
            style={{ width: "100%", fontWeight: 700 }}
            onClick={() => {
              onClickNext();
            }}
          >
            Which audiences did I lose to competitors?
          </Button>
          <Button
            size={"large"}
            style={{ width: "100%", fontWeight: 700 }}
            onClick={() => {
              onClickNext();
            }}
          >
            What did my customers buy elsewhere?
          </Button>
          <Button
            size={"large"}
            style={{ width: "100%", fontWeight: 700 }}
            onClick={() => {
              onClickNext();
            }}
          >
            Who did I lose to most last month?
          </Button>
        </div>
      </div>

      <svg
        id="lol1"
        ref={svgRef}
        style={{
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          pointerEvents: "none",
          overflowClipMargin: "content-box",
          overflow: "visible",
          position: "absolute",
        }}
      />
    </div>
  );
};

const CalendlyPage = () => {
  const Typography = window.antd.Typography;
  const Button = window.antd.Button;

  const { Title, Text } = Typography;

  React.useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div className="page1">
      <header
        className={"headerText"}
        style={{ justifyContent: "start", marginTop: 56, flexGrow: 0 }}
      >
        <Title style={{ marginBottom: 0, fontSize: 42, textAlign: "center" }}>
          Book a demo to find out why customers are going to competitors.
        </Title>
      </header>

      <div
        style={{
          display: "flex",
          flexGrow: 1,
          width: "100%",

          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 16,
          padding: 48,
          paddingTop: 16,
        }}
      >
        <div
          className="calendly-inline-widget"
          id={"calendly-inline-widget"}
          data-url="https://calendly.com/johnarts/rita-data-demo"
          style={{ minWidth: 320, height: "100%", width: "100%" }}
        ></div>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </div>
    </div>
  );
};

const LastPage = () => {
  const Typography = window.antd.Typography;
  const Button = window.antd.Button;

  const { Title, Text } = Typography;

  return (
    <div className="page1">
      <header
        className={"headerText"}
        style={{ justifyContent: "center", marginTop: 56, flexGrow: 0 }}
      >
        <Title style={{ marginBottom: 0, fontSize: 42 }}>
          We look forward to introducing you to the magic of Zero-party data.
        </Title>
      </header>
    </div>
  );
};

function App() {
  const Spin = window.antd.Spin;
  const message = window.antd.message;
  const [messageApi, contextHolder] = message.useMessage();

  const [isLoading, setIsLoading] = React.useState(false);

  const [lpiData, setLpiData] = React.useState({
    result: {
      "2h": {
        skyscanner: 1043,
        rome2rio: 1229,
        kayak: 674,
      },
      "6h": {
        skyscanner: 1181,
        rome2rio: 1268,
        kayak: 742,
      },
      "12h": {
        skyscanner: 1246,
        rome2rio: 1285,
        kayak: 786,
      },
      "1w": {
        skyscanner: 2101,
        rome2rio: 1644,
        kayak: 1269,
      },
      "2w": {
        skyscanner: 2421,
        rome2rio: 1820,
        kayak: 1462,
      },
      total_visits: 9360,
    },
  });

  const [email, setEmail] = React.useState("");
  const [targetWebsite, setTargetWebsite] = React.useState("booking");
  const [competitorWebsites, setCompetitorWebsites] = React.useState([
    "skyscanner",
    "kayak",
    "rome2rio",
  ]);

  const [step, setStep] = React.useState(1);

  const [isFooterButtonDisabled, setIsFooterButtonDisabled] = React.useState(
    true
  );

  // React.useEffect(() => {
  //   try {
  //     console.log("here lol");
  //     mixpanel.init("9a9432edda95d53541aa76fd98bdb0bb", {
  //       // debug: true,
  //       // track_pageview: true,
  //       persistence: "localStorage",
  //     });
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }, []);

  React.useEffect(() => {
    if (email.length) {
      mixpanel.track("Landing LPI", { email: email });
    }
  }, [email]);

  React.useEffect(() => {
    if (targetWebsite) {
      mixpanel.track("Landing LPI", { email: email, target: targetWebsite });
    }
  }, [targetWebsite, email]);

  React.useEffect(() => {
    if (competitorWebsites.length) {
      mixpanel.track("Landing LPI", {
        email: email,
        target: targetWebsite,
        competitors: competitorWebsites,
      });
    }
  }, [competitorWebsites, targetWebsite, email]);

  React.useEffect(() => {
    setIsFooterButtonDisabled(true);

    if (step === 2) {
      setTargetWebsite(null);
    }
    if (step === 3) {
      setCompetitorWebsites([]);
    }

    if (step === 7) {
      setStep(1);
    }

    if (step === 5 || step === 6) {
      setIsFooterButtonDisabled(false);
    }
  }, [step]);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const competitorsQuery = competitorWebsites.map((website) => {
          return { website: website };
        });
        const body = {
          target: { event: "visits", query: { website: targetWebsite } },
          competitors: { event: "visits", query: competitorsQuery },
          interaction_type: "uniques",
        };
        const response = await fetch("https://api.ritadata.com/lpi", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        const responseJson = await response.json();

        setLpiData(responseJson);
      } catch (err) {
        messageApi.open({
          type: "error",
          content: "Something went wrong. Please try again.",
        });
        setStep(1);
      }
      setIsFooterButtonDisabled(false);
      setIsLoading(false);
    };

    if (step === 4 && targetWebsite && competitorWebsites.length) {
      fetchData();
    }
  }, [step, targetWebsite, competitorWebsites]);

  React.useEffect(() => {
    if (competitorWebsites.length >= 3) {
      setIsFooterButtonDisabled(false);
    } else {
      setIsFooterButtonDisabled(true);
    }
  }, [competitorWebsites]);

  return (
    <div className="container">
      {contextHolder}
      <Header />

      {!isLoading ? (
        <main className="main">
          {step <= 3 ? (
            <div style={{ width: 350, paddingTop: 56 }}>
              <StepState step={step} />
            </div>
          ) : null}

          {step === 1 ? (
            <FirstPage
              onSubmit={(email) => {
                setStep(2);
                setEmail(email);
              }}
            />
          ) : null}

          {step === 2 ? (
            <SecondPage
              onCompanySelect={(website) => {
                setIsFooterButtonDisabled(false);
                setTargetWebsite(website);
              }}
              onRemove={() => {
                setIsFooterButtonDisabled(true);
                setTargetWebsite();
              }}
            />
          ) : null}

          {step === 3 ? (
            <ThirdPage
              onCompanySelect={(website) => {
                setCompetitorWebsites((prev) => [...prev, website]);
              }}
              onRemove={(website) => {
                setCompetitorWebsites((prev) =>
                  prev.filter((item) => item != website)
                );
              }}
            />
          ) : null}

          {step === 4 ? (
            <LPIPage
              targetWebsite={targetWebsite}
              lpiData={lpiData}
              onClickNext={() => {
                setStep(5);
              }}
            />
          ) : null}

          {step === 5 ? <CalendlyPage /> : null}

          {step === 6 ? <LastPage /> : null}
        </main>
      ) : (
        <main className={"main"}>
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Spin size="large" />
          </div>
        </main>
      )}

      <Footer
        step={step}
        shouldIncludeSteps={step <= 3}
        shouldIncludeButtons={step >= 2}
        isLoading={isLoading}
        isNextDisabled={isFooterButtonDisabled}
        onClickNext={() => {
          setStep((prev) => prev + 1);
        }}
        onClickPrev={() => {
          setStep((prev) => prev - 1);
        }}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
