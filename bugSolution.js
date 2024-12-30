import React from 'react';
import { Image, StyleSheet, View } from 'react-native-web';

const styles = StyleSheet.create({
  imageContainer: {
    width: 200,
    height: 200,
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

const MyImage = ({ uri }) => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri }}
        style={styles.placeholderImage}
        onLoad={() => setLoading(false)}
        onError={(error) => {
          setLoading(false);
          setError(error);
        }}
        fadeDuration={0}
      />
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error loading image</Text>}
    </View>
  );
};
export default MyImage;