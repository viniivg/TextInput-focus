import React, { ReactElement } from "react";

import { Container, TextInput } from './styles'

interface propsInpuit{
    width?: string
    icon: ReactElement | false
    placeholder: string
    secureTextEntry?: boolean
    inputRef?: any
    returnKeyType: 'done' | 'go' | 'next' | 'search' | 'send'
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad'
    onChangeText: (text: string) => void
    onSubmitEditing?:() => void

}

const App: React.FC<propsInpuit> = ({ 
    width,
    icon,
    placeholder,
    inputRef,
    secureTextEntry, 
    returnKeyType,
    keyboardType,
    onChangeText,
    onSubmitEditing,
 }) => {
    return (
        <Container>
            {icon && icon}
           <TextInput 
              ref={inputRef}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              onSubmitEditing={onSubmitEditing}
              returnKeyType={returnKeyType}
              keyboardType={keyboardType}
              autoCorrect={false}
              autoCapitalize='none'
            />
        </Container>
    )
}

export default App