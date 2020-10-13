import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

class BurgerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {

        if (this.props.active) {
            this.line1 = {
                transform: [
                    {
                        rotate: new Animated.Value(0.9).interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                                '0deg', '-50deg'
                            ],
                        })
                    }
                ],
                marginTop: 13,
                marginLeft: 2

            }

            this.line3 = {
                transform: [
                    {
                        rotate: new Animated.Value(0.9).interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                                '0deg', '50deg'
                            ],
                        })
                    }
                ],
                marginBottom: 16,
                marginLeft: 2
            }

            this.line2 = {
                opacity: new Animated.Value(0.9).interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                })
            }

        } else {
            this.line1 = {
                transform: [
                    {
                        rotate: new Animated.Value(0.9).interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                                '0deg', '0deg'
                            ],
                        })
                    }
                ]
            }

            this.line3 = {
                transform: [
                    {
                        rotate: new Animated.Value(0.9).interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                                '0deg', '0deg'
                            ],
                        })
                    }
                ]
            }

            this.line2 = {
                opacity: new Animated.Value(0.9).interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                })
            }
        }

        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.onPress ? this.props.onPress() : undefined
                }}
            >
                <Animated.View style={styles.wrapper}>
                    <Animated.View style={[styles.line, { width: 28 }, this.line1]} />
                    <Animated.View style={[styles.line, this.line2]} />
                    <Animated.View style={[styles.line, { width: 28 }, this.line3]} />
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

export default BurgerMenu;

const styles = StyleSheet.create({
    wrapper: {
        width: 40,
        height: 30,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginLeft: 5
    },
    line: {
        width: 34,
        height: 2,
        backgroundColor: 'gray',
    }
})
