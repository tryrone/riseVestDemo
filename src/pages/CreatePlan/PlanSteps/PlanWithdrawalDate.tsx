import {View} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';
import {CalendarInput} from '../../../components/TextInput';
import Button from '../../../components/Button';
import Colors from '../../../constants/Colors';

const PlanWithdrawalDate = () => {
  return (
    <View>
      <CustomText fontSize={17} fontWeight="700">
        When do you want to withdraw?
      </CustomText>

      <CalendarInput value="Choose a date" onPress={() => {}} placeholder="" />

      <Button
        text="Continue"
        textColor={Colors.white}
        fontWeight="700"
        textSize={15}
        style={{marginTop: 25}}
        bgColor={Colors.primary}
        onPress={() => {}}
      />
    </View>
  );
};

export default PlanWithdrawalDate;
