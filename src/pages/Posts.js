import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
//import { posts } from '../data/data';
import Post from '../components/Post';
import { connect } from 'react-redux';
import { getPosts } from '../actions/posts';

class Posts extends React.Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    filter: '',
    inputState: styles.input,
    // active: -1,
  }

  async componentDidMount() {
		await this.props.getPosts();
	}

  // selectFold = foldNum => {
  //   const current = this.state.active === foldNum ? -1 : foldNum;
  //   this.setState(() => ({ active: current }));
  // };

  render() {
    const { posts } = this.props;
    console.warn('POST', posts);
   // console.warn(this.state.active);
   if(this.props.loading) {
    return (
      <Text>Loading</Text>
    )
   } else {
    
    return (
      <>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} style={styles.buttonHeader} >
            <Text>
              Profile
					</Text>
          </TouchableOpacity>
          <Text style={styles.text}>Posts</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AddPost')} style={styles.buttonHeader} >
            <Text>
              Add Post
					</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>

          <TextInput
            style={this.state.inputState}
            onChangeText={(filter) => this.setState({ filter })}
            placeholder={`Enter the text`}
            onBlur={() => this.setState({ inputState: styles.input })}
            onFocus={() => this.setState({ inputState: styles.inputFocused })}
          />
          {posts && posts[0] && posts.length > 0 ? 
             (
              <FlatList
              style={styles.flatList}
              data={posts}
              //.filter(i => i.title.includes(this.state.filter.toLowerCase()))
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => <Post
                // handle={() => this.selectFold(item.id)}
                // active={item === this.state.active}
                title={item.title_post}
                body={item.post}
              />}
            />
            ): null}
        </View>
      </>
    );
   } 
  }
}
//export default Posts;

const mapStateToProps = state => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
});

const mapDispatchToProps = dispatch => ({
	getPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

const styles = StyleSheet.create({
  header: {
    //flex: 1,
    flexDirection: 'row',
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 75,
  },
  buttonHeader: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
    color: '#fff'
  },
  input: {
    padding: 10,
    marginLeft: '15%',
    borderWidth: 3,
    borderColor: 'grey',
    width: '70%',
  },
  inputFocused: {
    padding: 10,
    marginLeft: '15%',
    borderWidth: 3,
    borderColor: 'blue',
    width: '70%',
  }
});
