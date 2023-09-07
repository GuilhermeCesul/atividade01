import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participants } from "../../components/Participants";
import { styles } from "./styles";

export default function Home() {

    const [participants, setParticipants] = useState<String[]>([]);

    const [participantName, setParticipantName] = useState('')

    function handleParticipantAdd() {

        if (participantName.trim().length > 0) {

            if (participants.includes(participantName)){

                setParticipantName('');
                return Alert.alert('Problema', '=> Participante já informado!')
            }

            setParticipants([...participants, participantName.trimStart()])
            setParticipantName('')
        } else {
            Alert.alert('Problema ao adicionar o participante.', '=> Nome não informado')
        }
    }

    function handleParticipantRemove(name : String) {

        Alert.alert(
            'Remover',
            `Deseja remover o participante ${name}`,
            [
                {
                    text: 'Sim',
                    onPress: () => setParticipants(prevState => prevState.filter(partic => partic != name))
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ]
        )
    }

    return (

        <View style = {styles.container} >
            <Text style = {styles.title} >Nome do Grupo</Text>
            <Text style = {styles.data} >Sexta, 26 de julho de 2023</Text>

            <View style = {styles.form} >
                <TextInput style = {styles.input}
                placeholder = 'Nome do participante'
                placeholderTextColor={'#FFF'}
                onChangeText={setParticipantName}
                value = {participantName} />

                <TouchableOpacity style = {styles.button} onPress={handleParticipantAdd} >
                    <Text style = {styles.textButton} >+</Text>
                </TouchableOpacity>
            </View>

            <Text style = {styles.title} >Participantes</Text>

            <FlatList
            data = {participants}
            keyExtractor = {item => item}
            renderItem={({item}) => (<Participants key={item} name={item} onRemove={() => handleParticipantRemove(item)} />)}
            ListEmptyComponent={() => <Text style = {styles.listEmpty} >Sem participantes</Text>}
            showsVerticalScrollIndicator = {false} />
        </View>
    )
}
