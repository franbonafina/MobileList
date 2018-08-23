import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class PhotoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }

 /* componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => {
      this.setState({ albums: response.data });
      console.log('response.data: ', response.data);
    });
  }*/

   renderPhotos() {
    return this.state.photos.map(photos =>
      <PhotoDetail photos={photos} />
    );
  }


  render() {
    return (
      <ScrollView>
        {this.renderPhotos())}
      </ScrollView>
    );
  }
}

export default PhotoList;
