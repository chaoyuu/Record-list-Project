import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Image,
    Modal,
    TextInput,
   
} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import {SwipeListView} from 'react-native-swipe-list-view';
export const SampleRecording = () => {
    const [data, setData] = useState([{ id: 1, title: 'Task 1', active: false }]);
   

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [title, setTitle] = useState('')
    const renderItem = ({ item, index }) => {
        return (

            <View style={styles.TaskItem}>
                <CheckBox
                    disabled={false}
                    value={item.active}
                    onValueChange={(newValue) => setToggleCheckBox(newValue, index)}
                />
                <Text style={[styles.SubTitle, { textDecorationLine: item.active ? 'line-through' : 'none' },
                ]}>{item.title}</Text>
               <TouchableOpacity key={item.key} style={styles.deleteBtnWrapper} onPress={() => removeItem(item.key)}>
                    <Image style={styles.deleteIcon} source={require('../../../assets/images/delete.png')} />
                </TouchableOpacity>
            </View>
        );
    };
    
    
        
    const  removeItem = ()=> {
   
    };
    const openModal = () => {
        setIsModalVisible(true);

    };
    
  
    const saveTitle = () => {
        let newArr = [...data];
        newArr.push({ id: newArr.length + 1, title: title, active: false });
        setData(newArr);
    };
    const setToggleCheckBox = (value, index) => {
        let newArr = [...data];
        newArr[index].active = !newArr[index].active;
        setData(newArr);

    };


    
 return (
        <View style={styles.container}>
            <SafeAreaView style={styles.contentContainer}>
                <Text style={styles.title}>SampleRecordings</Text>
                <FlatList data={data} renderItem={renderItem} />
                <TouchableOpacity style={StyleSheet.AddBtnWrapper} onPress={openModal}>
                    <Image style={styles.addIcon} source={require('../../../assets/images/add.png')}
                    />
                </TouchableOpacity>
            </SafeAreaView>
            <Modal transparent={true} visible={isModalVisible}>
                <View style={styles.modalContentWrapper}>
                    <TouchableOpacity style={styles.closeBtnWrapper} onPress={() => setIsModalVisible(false)}>
                        <Image style={styles.closeIcon} source={require('../../../assets/images/close.png')} />
                    </TouchableOpacity>
                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.textInput} placeholder={'Please enter the task title'}
                            onChangeText={(text) => setTitle(text)}
                        />
                        <TouchableOpacity style={styles.btnWrapper} onPress={saveTitle}>
                            <Text style={{ textAlign: 'center' }}>SAVE</Text>
                        </TouchableOpacity>



                    </View>
                </View>
            </Modal>
        </View>
    );


};
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contentContainer: {
        display: 'flex',
        flex: 1,
    },
    addIcon: {
        width: 50,
        height: 50,
    },
    AddBtnWrapper: {
        alignItems: 'center',
    },

    
    modalContentWrapper: {
        height: '50%',
        marginTop: 'auto',
        backgroundColor: 'green',
        padding: 15,
    },
    closeIcon: {
        width: 40,
        height: 40,
    },
    closeBtnWrapper: {
        alignItems: 'flex-end',
    },
    inputWrapper: {
        marginTop: 35,
    },
    textInput: {
        padding: 15,
        backgroundColor: 'white',
        fontSize: 20,
    },
    btnWrapper: {
        backgroundColor: 'white',
        marginTop: 30,
        padding: 15,
    },
    TaskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        padding: 15,
    },
    SubTitle: {
        fontSize: 20,
        marginLeft: 15,
    },
    deleteIcon: {
        width: 40,
        height: 40,
        marginRight: 15,

    },
   
});
