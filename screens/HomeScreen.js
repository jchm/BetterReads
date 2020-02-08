import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native';

import books from '../example/search.json';

import CardBook from '../components/CardBook';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {
          books.map((prop, key) => {
            return (<CardBook 
                title={prop.best_book.title}
                image_url={prop.best_book.image_url}
                author={prop.best_book.author}
                published={prop.original_publication_year}
                key={key}
                ></CardBook>)
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
  });
  