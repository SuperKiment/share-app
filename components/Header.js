import React from 'react';
import {SafeAreaView, View, Text, StyleSheet } from 'react-native';
import styles from '../Styles/styles';

const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Share</Text>
    </View>
    </SafeAreaView>
  );
};

export default Header;
