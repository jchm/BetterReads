import React from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View
} from 'react-native';

export default function CardBook(props) {
  return (
    <View style={styles.wrapper}>
        <Text style={styles.title}>{ props.title }</Text>
        <Text style={styles.description}>By {props.author.name}</Text>
        <Text style={styles.meta}>Published {props.published}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 16,
    marginTop: 8,
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowOffset: { width: 0.125, height: 0.25 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    fontSize: 28,
    marginBottom: 6,
    fontWeight: 'bold'
  },
  description: {
    marginBottom: 12
  },
  meta: {
    fontSize: 14,
    color: "#888"
  },
});