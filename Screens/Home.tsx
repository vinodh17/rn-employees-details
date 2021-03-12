import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getPosts } from "../Redux/Actions/action";

const Home = (props: any) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    props.getPosts(1);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    const interval = setInterval(async () => {
      setPage(page + 1);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [page]);

  const navToDetails = (details: any) => {
    props.navigation.navigate("Details", details);
  };

  return (
    <View testID="home-wrapper" style={styles.container}>
      <Text>
        <FlatList
          data={props.posts}
          keyExtractor={(item: any) => item.key}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text>
                <TouchableOpacity onPress={() => navToDetails(item)}>
                  <Text>Title: {item.title}</Text>
                  <Text>URL: {item.url}</Text>
                  <Text>Created At: {item.created_at}</Text>
                </TouchableOpacity>
              </Text>
            </View>
          )}
          onEndReached={() => setPage(page + 1)}
          onEndReachedThreshold={1}
          onRefresh={() => props.getPosts(1)}
        />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    marginBottom: 20,
    borderColor: "#333",
    borderWidth: 1,
    padding: 15,
    height: 115,
    width: 220,
    borderRadius: 5,
  },
});

const mapStateToProps = (state: any) => ({
  posts: state.postsReducer.posts,
});

export default connect(mapStateToProps, { getPosts })(Home);
