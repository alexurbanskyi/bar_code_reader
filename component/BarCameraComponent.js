import React from 'react';
import {StyleSheet, View, Vibration} from 'react-native';

import {RNCamera} from 'react-native-camera';

function BarCameraComponent({setBarModalVisible, setBarData}) {
  //   takePicture = async () => {
  //         if (camera) {
  //           const options = { quality: 0.5, base64: true };
  //           const data = await camera.takePictureAsync(options);
  //           console.log(data.uri);
  //           setBarData(data.uri)
  //           setBarModalVisible(false)
  //         }
  //       };

  function takeBarCode(dataBar) {
    if (dataBar.length) {
      Vibration.vibrate();
      setBarData(dataBar[0].data);
      setBarModalVisible(false);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          // androidRecordAudioPermissionOptions={{
          //   title: 'Permission to use audio recording',
          //   message: 'We need your permission to use your audio',
          //   buttonPositive: 'Ok',
          //   buttonNegative: 'Cancel',
          // }}
          onGoogleVisionBarcodesDetected={({barcodes}) => takeBarCode(barcodes)}
        />
        {/* <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity onPress={takePicture} style={styles.capture}>
                <Text style={{ fontSize: 14 }}> SNAP </Text>
              </TouchableOpacity>
            </View> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  //camera
  container: {
    height: 150,
    overflow: 'hidden',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default BarCameraComponent;
