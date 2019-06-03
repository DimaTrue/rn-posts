import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Post from '../components/Post';
import { connect } from 'react-redux';
import { getPosts } from '../actions/posts';
import Loading from '../components/Loading';


class Posts extends React.Component {

  static navigationOptions = {
    header: null,
  };

  async componentDidMount() {
    await this.props.getPosts();
  }

  render() {
    const { posts, loading, navigation } = this.props;
    if (loading) {
      return (
        <Loading />
      );
    } else {
      return (
        <>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.buttonHeader} >
              <Text>
                Profile
					</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Posts</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AddPost')} style={styles.buttonHeader} >
              <Text>
                Add Post
					</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            {posts && posts[0] && posts.length > 0 ?
              (
                <FlatList
                  style={styles.flatList}
                  data={posts ? posts : []}
                  keyExtractor={(item) => item.post}
                  renderItem={({ item }) => <Post
                    title={item.title_post}
                    body={item.post}
                  />}
                />
              ) : null}
          </View>
        </>
      );
    }
  }
}

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
    flexDirection: 'row',
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 75,
  },
  buttonHeader: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
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
});
