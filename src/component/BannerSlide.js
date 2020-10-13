import React, { Component, createRef } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);

export class BannerSlide extends Component {
    scrollRef = createRef()
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState(prev => ({ selectedIndex: prev.selectedIndex == this.props.images.length - 1 ? 0 : prev.selectedIndex + 1 }),
                () => {
                    this.scrollRef.current.scrollTo({
                        animated: true,
                        y: 0,
                        x: screenWidth * this.state.selectedIndex
                    })
                })
        }, 3500)
    }

    setSelectedInde = event => {
        // Get view width
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        // Get current position of the scroll
        const contentOffset = event.nativeEvent.contentOffset.x

        const selectedIndex = Math.floor(contentOffset / viewSize)
        this.setState({ selectedIndex })
    }

    render() {
        const { images } = this.props
        const { selectedIndex } = this.state
        return (
            <View style={{ height: '100%', width: '100%' }}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    pagingEnabled
                    onMomentumScrollEnd={this.setSelectedInde}
                    ref={this.scrollRef}
                >
                    {images.map((image, index) => (
                        <Image key={image.id} source={{ uri: image.img }} style={styles.imageStyle} />
                    ))}
                </ScrollView>
                <View style={styles.circleContent}>
                    {images.map((image, index) => (
                        <View
                            key={image.id}
                            style={[styles.whiteCircle, { backgroundColor: index == selectedIndex ? '#4a4c4d' : '#fff' }]}
                        />
                    ))}
                </View>
            </View>
        )
    }
}

export default BannerSlide

const styles = StyleSheet.create({
    imageStyle: {
        height: '100%',
        width: screenWidth - 40,
        resizeMode: 'stretch',
        marginRight: 7,
        borderRadius: 10
    },
    circleContent: {
        position: 'absolute',
        bottom: -20,
        height: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    whiteCircle: {
        width: 7,
        height: 7,
        borderRadius: 7 / 2,
        margin: 5,
        backgroundColor: '#fff'
    },
})



