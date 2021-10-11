import React, { useRef } from "react";

import { Input } from '../../components'
import IconBack from '../../assets/icon-back.svg'
import IconUser from '../../assets/icon-user.svg'
import IconPassword from '../../assets/icon-password.svg'

import { Container, Header, ButtonView, Title, Subtitle, Content, View, Text, Button, TextButton } from './styles'

const App = () => {
    const passwordRef = useRef<any>()
    return (
        <Container>
            <Header>
                <ButtonView>
                    <IconBack fill='#EEEEEE' width={24} height={24} />
                </ButtonView>
                <Title>Entrar em minha conta.</Title>
                <Subtitle>Que bom ter você de volta aqui!</Subtitle>
            </Header>

            <Content>
                <Input
                    placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={(text) => { }}
                    icon={<IconUser fill='#616161' width={16} height={16} />}
                    returnKeyType="next"
                    onSubmitEditing={() => passwordRef.current.focus()} />

                <Input
                    inputRef={passwordRef}
                    placeholder='Senha'
                    secureTextEntry
                    onChangeText={(text) => { }}
                    returnKeyType="done"
                    onSubmitEditing={() => console.log('Chamando api de login')}
                    icon={<IconPassword fill='#616161' width={16} height={16} />} />
            </Content>

            <View>
                <Text>Ainda não tem uma conta? Registrar.</Text>

                <Button>
                    <TextButton>Entrar</TextButton>
                </Button>
            </View>
        </Container>
    )
}

export default App