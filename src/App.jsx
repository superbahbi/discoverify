import React, { useState, useEffect } from "react";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import { SpotifyApiContext } from "react-spotify-api";
import Main from "./Main";
import Cookies from "js-cookie";
import {
  Heading,
  Container,
  Section,
  Columns,
  Content,
} from "react-bulma-components";
import "./App.css";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("spotifyAuthToken"));
  }, []);
  return (
    <div className="App">
      <Section>
        <Container>
          <Heading>
            <a className="Title" href="/">
              Discoverify
            </a>
          </Heading>
        </Container>
      </Section>
      <Section>
        <Container>
          <Columns>
            <Columns.Column className="Column">
              {token ? (
                <SpotifyApiContext.Provider value={token}>
                  <Main token={token} />
                </SpotifyApiContext.Provider>
              ) : (
                <Content>
                  <p>
                    Want to find out how much storage it costs to download your
                    Spotify library as mp3? No? Well find out by pressing the
                    button below!
                  </p>
                  <SpotifyAuth
                    noLogo="true"
                    btnClassName="SigninBtn button"
                    redirectUri={process.env.REACT_APP_CALLBACK}
                    clientID={process.env.REACT_APP_CLIENT_ID}
                    scopes={[Scopes.all]}
                  />
                </Content>
              )}
            </Columns.Column>
            <Columns.Column></Columns.Column>
          </Columns>
        </Container>
      </Section>
      <Section>
        <Container>
          <Content className="Footer">
            <p>
              Discoverify by <a href="https://bahbi.net">Bahbi</a>. The source
              code is licensed{" "}
              <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.{" "}
              <a href="https://github.com/superbahbi/discoverify">Github</a>
            </p>
          </Content>
        </Container>
      </Section>
    </div>
  );
}
export default App;
