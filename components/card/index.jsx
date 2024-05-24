import { TextLabel, TextValue } from "../texts";
import { BaseCardValue, BaseCardBmi } from './styles'


export const CardValue = ({ value, label}) => {
    return (
        <BaseCardValue>
        <TextValue value={value} />
        <TextLabel label={label} />
        </BaseCardValue>
    );
};

export const CardBmiResult = ({ bmi }) => {
    const decimalValue = parseFloat(bmi)
    return (
      <BaseCardBmi>
      <TextValue value={decimalValue.toFixed(2)} />
      <TextLabel label="BMI" />
      </BaseCardBmi>
  );
}