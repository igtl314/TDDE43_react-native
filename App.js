import React, {useState} from 'react';

import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Button,
} from 'react-native';

const images = [
  {uri: 'https://www.stockholmsdf.se/wp-content/uploads/2016/06/Dart.jpg'},
  {
    uri: 'https://media.istockphoto.com/photos/dart-board-with-three-darts-outdoors-picture-id1133497978?k=20&m=1133497978&s=170667a&w=0&h=YvEaZYhVrDvBJyjgko4tjZEaTR1bnTXuB-PXNu2jtLs=',
  },
  {
    uri: 'https://www.pricerunner.se/product/1200x630/3000601014/Summer-Darts-Game-37cm.jpg',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const {width, height} = Dimensions.get('screen');
const imageW = width * 0.7;
const imageH = imageW * 1.54;

const App = () => {
  const [deg, setDeg] = useState(1);
  const [size, setSize] = useState(1);
  const renderItem = ({item}) => <Item title={item.title} />;
  var angle = deg + 'deg';
  return (
    <View>
      <FlatList
        data={images}
        pagingEnabled
        horizontal={true}
        renderItem={({item, index}) => (
          <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={item}
              key={index}
              style={{
                width: imageW,
                height: imageH,
                borderWidth: 2,

                borderRadius: 20,
                marginTop: width / 3,
                marginHorizontal: width / 2,
                marginBottom: width / 5,
                transform: [{rotate: angle}, {scale: size}],
              }}
            />
            <Button
              title="Click me to rotate"
              onPress={() => setDeg(deg + 90)}
            />

            <Button
              title="Click me to scale up"
              onPress={() => setSize(size + 0.1)}
            />
            <Button
              title="Click me to scale down"
              onPress={() => setSize(size - 0.1)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
