import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Button, Text} from 'react-native';

function OpenDetailButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Detail 1 열기"
      onPress={() => navigation.push('Detail', {id: 1})}
    />
  );
}

function HomeScreen({navigation}) {
  useEffect(() => {
    navigation.setOptions({title: '홈'});
  }, [navigation]);
  return (
    <View>
      {/* navigate : 같은화면이면 파라미터만 변경됨 */}
      {/* <Button
        title="Detail 열기"
        // onPress={() => navigation.navigate('Detail')}
        onPress={() => navigation.push('Detail')}
      /> */}
      {/*
      <Button
        title="Detail 1 열기"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
      <Button
        title="Detail 2 열기"
        onPress={() => navigation.push('Detail', {id: 2})}
      />
      <Button
        title="Detail 3 열기"
        onPress={() => navigation.push('Detail', {id: 3})}
      />
      <Button
        title="Headerless 열기"
        onPress={() => navigation.push('Headerless')}
      />
      */}
      <Text>Home</Text>
      <OpenDetailButton />
    </View>
  );
}

export default HomeScreen;
