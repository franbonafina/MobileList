import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class PhotoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }

 /*componentWillMount() {
  
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
