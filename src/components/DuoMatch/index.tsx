import { ColorValue, Text, View, Modal, ModalProps, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../theme";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle } from "phosphor-react-native";
import { Heading } from "../Heading";
interface Props extends ModalProps {
    discord: string;
    onClose: () => void

}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
    return (
        <Modal
        animationType="fade"
            transparent
            statusBarTranslucent
            {...rest}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.closeIcons} 
                    onPress={onClose}
                    >
                        <MaterialIcons 
                        name="close"
                        size={20}
                        color={THEME.COLORS.CAPTION_500}

                        />
                    </TouchableOpacity>
                    <CheckCircle size={64}
                        color={THEME.COLORS.SUCCESS}
                    />
                    <Heading title="Let's Play" subtitle="Agora é só começar a jogar!" style={{alignItems: "center", marginTop: 24}}/>
                    <Text style={styles.label}>
                        Adicionar no Discord
                    </Text>
                    <TouchableOpacity style={styles.button}>

                    <Text style={styles.discord}>
                        {discord}
                    </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal >
    );
}