import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FeedListItem from './FeedListItem';

function FeedList({logs, onScrolledToBottom}) {
  const onScroll = e => {
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    if (distanceFromBottom < 72) {
      onScrolledToBottom(true);
    } else {
      onScrolledToBottom(false);
    }
    // 최하단
    // contentSize : {"height": 1219, "width": 390}
    // layoutMeasurement : {"height": 674, "width": 390}
    // contentOffset : {"x": 0, "y": 545}
    // ScrollBottom : contentSize.height - layoutMeasurement.height - contentOffset.y
    // console.log(contentSize, layoutMeasurement, contentOffset);
  };
  return (
    <FlatList
      data={logs}
      style={StyleSheet.block}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onScroll={onScroll}
    />
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});

export default FeedList;
