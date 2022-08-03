import React, {useEffect} from 'react';
import {View, Button} from 'react-native';

function HomeScreen({navigation}) {
  useEffect(() => {
    navigation.setOptions({title: '홈'});
  }, [navigation]);
  return (
    <View>
      <Button
        title="Detail 1"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
      <Button
        title="Detail 2"
        onPress={() => navigation.push('Detail', {id: 2})}
      />
      <Button
        title="Detail 3"
        onPress={() => navigation.push('Detail', {id: 3})}
      />
      <Button
        title="Headerless open"
        onPress={() => navigation.push('Headerless')}
      />
    </View>
  );
}

export default HomeScreen;
