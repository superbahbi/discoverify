import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Heading, Container, Section, Columns, Content } from 'react-bulma-components';
import './App.css';

function App() {
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
            <Content>
              <p>Want to find out how much storage it costs to download your Spotify library as mp3? No? Well find out by pressing the button below!</p>
              <Button color="black">Sign in with Spotify</Button>
            </Content>
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
