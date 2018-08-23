import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    };
  }

 /* componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => {
      this.setState({ albums: response.data });
      console.log('response.data: ', response.data);
    });
  }*/

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
         {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
