import { InputContainer, InputLabel, TextInput } from './styles'

const Input = ({ label, value, placeholder, onChangeText}) => {
    return (
        <InputContainer>
        <InputLabel>{label}</InputLabel>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#BBBBBB"
          keyboardType="numeric"
          value={value}
          onChangeText={onChangeText}
        />
      </InputContainer>
    )
}
export default Input