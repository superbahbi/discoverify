import React, { Fragment, useState, useEffect } from "react";
import {
  Box,
  Media,
  Container,
  Content,
  Heading,
} from "react-bulma-components";
var Spotify = require("spotify-web-api-js");
function Main(props) {
  const [user, setUser] = useState({});
  const [userPlaylist, setUserPlaylist] = useState({});
  const [playlistCount, setPlaylistCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  var spotifyApi = new Spotify();
  spotifyApi.setAccessToken(props.token);
  useEffect(() => {
    spotifyApi.getMe(function (err, data) {
      if (err) console.error(err);
      else setUser(data);
    });
  }, []);
  useEffect(() => {
    setLimit(20);
    spotifyApi.getUserPlaylists({ limit, offset }).then(
      function (data) {
        setUserPlaylist(data);
        data.items.map((playlist) =>
          setPlaylistCount(
            (playlistCount) => playlistCount + playlist.tracks.total
          )
        );
        if (data.next !== null) {
          setOffset((prevCount) => prevCount + 20);
        }
      },
      function (err) {
        console.error(err);
      }
    );
  }, [limit, offset]);

  return (
    <Fragment>
      <div>
        <span role="img">👋</span> Hi, {user.display_name}
      </div>
      <Box className="Box">
        <Media>
          <Media.Item>
            <Container>
              <Content className="BoxItem">
                <p>
                  The approximate amount of storage you'll need to save all your
                  songs as mp3 files
                </p>
                <Heading className="Title">
                  {(playlistCount * 3.516 * 0.001).toFixed(2)} GB
                </Heading>
                <p>
                  This value is based on 160 Kbps, approximately the sound
                  quality you would get from a CD.
                </p>
              </Content>
            </Container>
          </Media.Item>
        </Media>
      </Box>
      <Box className="Box">
        <Media>
          <Media.Item>
            <Container>
              <Content className="BoxItem">
                <Heading className="Title">{userPlaylist.total}</Heading>
                <p>Playlist</p>
              </Content>
            </Container>
          </Media.Item>
        </Media>
      </Box>
      <Box className="Box">
        <Media>
          <Media.Item>
            <Container>
              <Content className="BoxItem">
                <Heading className="Title">{playlistCount}</Heading>
                <p>Total tracks from all your playlists.</p>
              </Content>
            </Container>
          </Media.Item>
        </Media>
      </Box>
      <Box className="Box">
        <Media>
          <Media.Item>
            <Container>
              <Content className="BoxItem">
                <Heading className="Title">
                  {(playlistCount * 3) / 60} hours
                </Heading>
                <p>Hours of music across all your playlists.</p>
              </Content>
            </Container>
          </Media.Item>
        </Media>
      </Box>
    </Fragment>
  );
}
export default Main;
