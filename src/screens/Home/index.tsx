import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant"
import { useState } from "react";

export function Home() {

    const [participant, setParticipant] = useState(["leo", "teste", "sla"]);

    function handleParticipantAdd() {
        console.log("Você clicou no botão de Adicionar!");
    }

    function handleParticipantRemove() {
        console.log("Você clicou no botão de remover!");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022.
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {
                    participant.map(p => (
                        <Participant key={p} name={p} onRemove={handleParticipantRemove} />
                    ))
                }
            </ScrollView>

        </View>
    )
}