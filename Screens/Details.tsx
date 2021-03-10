import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Details = (props:any) => {
  return (
		<View style={styles.container}>
			<Text>
				Details Screen
				{JSON.stringify(props.route.params.details)}
			</Text>
		</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Details;
