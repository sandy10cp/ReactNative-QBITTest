import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView, SafeAreaView, ToastAndroid } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BannerSlide from '../component/BannerSlide';
import BurgerMenu from '../component/BurgerMenu';
import Toast from '../component/Toast';

const width = Dimensions.get('screen').width;

const images = [
    {
        id: 1,
        img: 'https://www.freenikelocker.com/image/cache/catalog/banner-8-1140x380.jpg'
    },
    {
        id: 2,
        img: 'https://www.joinnike.com/image/cache/catalog/banner-9-1140x380.jpg'
    },
    {
        id: 3,
        img: 'https://releases.snipesusa.com/wp-content/uploads/banner-29.jpg'
    },
];

const dataItem = [
    {
        id: 1,
        name: 'Nike Vapormax',
        image: 'https://www.searchpng.com/wp-content/uploads/2019/01/Nike-Shoe-PNG.png'
    },
    {
        id: 2,
        name: 'Nike Airmax',
        image: 'https://lh3.googleusercontent.com/proxy/Jqzqk7YaUybUJl4Su2y4sQVYwUsbDJ9iFnzHVBd-o2rprkZHi-eab8mFDRnOfaCfbzK_IIdKUEkfmQ6Yb7ugVNHd1jHy27bOX0xJVHS5lwHwsJolRNoylxg9WWZ8Cyu_o0sN1SxcyoB1EfAU-2meW9BCmM4_4Jf-DGk'
    },
    {
        id: 3,
        name: 'Nike Pegasus',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-59babacb-2bda-4bd7-957d-6007539b21e2/renew-run-running-shoe-RhdGb5.jpg'
    },
    {
        id: 4,
        name: 'Nike Revolution',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/efd175a7-240f-436e-b204-b3c5944f7bae/react-miler-running-shoe-GZclxK.jpg'
    },
    {
        id: 5,
        name: 'Nike Quest',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f3136f9d-aa5a-4d69-8f9f-f45ebb7479c5/pegasus-trail-2-gore-tex-trail-running-shoe-R04pd5.jpg'
    },
    {
        id: 6,
        name: 'Nike Air Zoom',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/314b65f5-483d-4029-9787-1dd6734290bb/quest-3-running-shoe-0qDXNf.jpg'
    },
]

const Home = () => {

    const [state, setState] = useState({
        active: false,
        title: 'Add new item',
        toastShow: false
    })

    const [cart, setCart] = useState(0)
    const addCart = (value) => {
        const addItem = cart + 1;
        setCart(addItem)
        setState({ ...state, title: `${value} Added`, toastShow: true })
        setTimeout(() => {
            setState({ ...state, toastShow: false })
        }, 2000);
    }

    const handleBurgerMenu = () => {
        setState({ ...state, active: !state.active })
    }


    const [items, setItem] = useState(dataItem)

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', }}>
                <View style={styles.contentHeader}>
                    <BurgerMenu active={state.active} onPress={() => handleBurgerMenu()} />
                    <MaterialCommunityIcons name="cart" color="#4a4c4d" size={35} style={{ marginRight: 7 }} />
                    {
                        cart == 0 ? null :
                            <View style={styles.badge}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white' }}>{cart}</Text>
                            </View>
                    }
                </View>
            </View>
            <View style={styles.titleHeader}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Nike App Store</Text>
            </View>
            <View style={styles.banner}>
                <BannerSlide images={images} />
            </View>
            <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.contentItem}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            items.map((item) => {
                                return (
                                    <View key={item.id} style={styles.item}>
                                        <View style={styles.wrappImage}>
                                            <Image source={{ uri: item.image }} style={styles.imgItem} />
                                        </View>
                                        <View style={styles.wrappAddBtn}>
                                            <TouchableOpacity style={styles.btnAdd}
                                                onPress={() => addCart(item.name)}
                                            >
                                                <FontAwesome name="plus" color="#4a4c4d" size={15} />
                                            </TouchableOpacity>
                                            <View style={{ marginLeft: 4 }}>
                                                <Text numberOfLines={2} style={{ fontSize: 14, color: 'white' }}>{item.name}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
            <Toast title={state.title} show={state.toastShow} />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#e3e3e3',
        borderTopRightRadius: width / 2,
    },
    contentHeader: {
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleHeader: {
        width: '100%',
        height: 70,
        padding: 15,
    },
    badge: {
        position: 'absolute',
        top: 5,
        right: 5,
        width: 18,
        height: 18,
        backgroundColor: '#f55353',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18 / 2
    },
    banner: {
        width: '98%',
        height: 150,
        paddingHorizontal: 10
    },
    contentItem: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    item: {
        width: width / 2 - 50,
        height: 240,
        backgroundColor: '#f5f5f5',
        borderRadius: 6,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 15,
        shadowColor: "#eee",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 7,
    },
    wrappImage: {
        height: '80%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    imgItem: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        borderRadius: 6,
    },
    wrappAddBtn: {
        height: '20%',
        width: '100%',
        backgroundColor: 'gray',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    btnAdd: {
        height: 22,
        width: 22,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
})
