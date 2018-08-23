import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//import axios from 'axios';



class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: [],
    };
  }

  /*componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => {
      this.setState({ albums: response.data });
      console.log('response.data: ', response.data);
    });
  }*/

  render() {
    return (
      <ScrollView>
        //{this.state.albums.map(album => <Photo key={album.title} album={album} />)}
      </ScrollView>
    );
  }
}

export default Photo;
