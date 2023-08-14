import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, StatusBar, FlatList, TextInput, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import AutoHeightImage from 'react-native-auto-height-image'



const AllAnimeScreen = () => {
    const [searchqry, onChangeqry] = React.useState('');
    const { linearGradient, tableHeader, animeTitle, Logo, flatlist, container, searchbox, loadingindi, animeData } = styles
    const [isLoading, setLoading] = useState(true);
    const [ListofAnime, setData] = useState([]);

    const AnimeList = ({ item }) => (
        <View style={flatlist}>
            <View style={Logo}>
            <AutoHeightImage
                width={100}
                height={100}
                source={{
                    uri: item.images.jpg.image_url,
                }}
            />

            </View>
            
            <View stlye={animeData}>
                <Text style={animeTitle} adjustsFontSizeToFit={true}
                    numberOfLines={2}>
                    {item.title}
                </Text>
            </View>

        </View>
    );

    const Ifloading = () => {
        if (isLoading) {
            return null;
        }
        return null;
    }
    const getAnimes = async () => {
        setLoading(true);
        setData();
        try {
            const sq = searchqry
            const link = "https://api.jikan.moe/v4/anime?q="
            const url = link + sq
            const response = await fetch(url);
            const json = await response.json();
            console.log(sq)
            setData(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAnimes();
    }, []);

    return (


        <LinearGradient colors={['#5f2c82', '#49a09d']} style={linearGradient}>
            <SafeAreaView style={container}>
                <TextInput
                    style={searchbox}
                    onChangeText={onChangeqry}
                    value={searchqry}
                    onSubmitEditing={getAnimes}
                    placeholder="Search for anime"
                />
                <View style={loadingindi}>
                    <ActivityIndicator size={"large"} animating={isLoading} style={loadingindi} />
                </View>

                <FlatList
                    data={ListofAnime}
                    renderItem={({ item }) => <AnimeList item={item} />}
                    keyExtractor={item => item.mal_id}
                />
            </SafeAreaView>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    loadingindi: {
        position: 'absolute',
        top: 30,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animedata: {
        
        marginRight:5,
        flexDirection: 'column',
        flex: 1,

    },
    searchbox: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom:5

    },
    linearGradient: {
        flex: 1
    },
    animeTitle: {
        color: "white",
        flex: 1,
        marginRight: 1,
        marginLeft: 20,
        fontSize: 15,
        width:230,
    },
    Logo: {
        justifyContent:'center',
        maxHeight: 300,
        maxWidth: 120,
        alignItems:'center'

    },
    flatlist: {
        minHeight:135,
        marginLeft: 15,
        marginBottom:15,
        flexDirection: "row",
        flex: 1
    },
    
})

export default AllAnimeScreen
