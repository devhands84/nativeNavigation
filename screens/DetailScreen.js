import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function DetailScreen({route, navigation}) {
  useEffect(() => {
    navigation.setOptions({title: `상세정보 - ${route.params.id}`});
  }, [navigation, route.params.id]);
  return (
    <View style={styles.block}>
      <Text style={styles.text}> id : {route.params.id}</Text>
      <View style={styles.Buttons}>
        <Button
          title="Next"
          onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
        />
        <Button title="Back" onPress={() => navigation.pop()} />
        <Button
          style={styles.Buttons}
          title="Home"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
  Buttons: {
    flexDirection: 'row',
  },
});

export default DetailScreen;
