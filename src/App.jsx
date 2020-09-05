import React from 'react';
import { SpotifyAuth, Scopes  } from 'react-spotify-auth'
import { SpotifyApiContext  } from 'react-spotify-api'
import Data from "./Data"
import Cookies from 'js-cookie'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Heading, Container, Section, Columns, Content } from 'react-bulma-components';
import './App.css';

function App() {
  const token = Cookies.get('spotifyAuthToken')
  return (
  <div className="App">
    <Section>
      <Container>
        <Heading className="Title">
          Playlistify
        </Heading>
      </Container>
    </Section>
    <Section>
      <Container>
        <Columns>
          <Columns.Column className="Column">
          {token ? (
    
            <SpotifyApiContext.Provider value={token}>
              <Data token={token} />
            </SpotifyApiContext.Provider>


            ) : (
              // Display the login page
              <Content>
              <p>Want to find out how much storage it costs to download your Spotify library as mp3? No? Well find out by pressing the button below!</p>
              <SpotifyAuth
                noLogo="true"
                btnClassName="SigninBtn button"
                redirectUri='http://localhost:3000/callback'
                clientID={process.env.REACT_APP_CLIENT_ID}
                scopes={[Scopes.all]}
              />
            </Content>
            )}

          </Columns.Column>
          <Columns.Column>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>

    <Section>
      <Container>
        <Content className="Footer">
          <p>
          Playlistify by <a href="http://bahbi.net">Bahbi</a>. The source code is licensed <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. <a href="https://github.com/superbahbi/Playlistify">Github</a> 
          </p>
        </Content>
      </Container>
    </Section>

  </div>
  );
}
export default App;
