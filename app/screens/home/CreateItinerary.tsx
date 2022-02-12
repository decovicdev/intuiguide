import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

import Button from '../../components/shared/button/Button';
import ButtonWithText from '../../components/shared/button/ButtonWithText';
import Card from '../../components/shared/Card';
import { Image } from '../../components/shared/image';
import Indicator from '../../components/shared/Indicator';
import FormField from '../../components/shared/input/FormField';
import SafeAreaView from '../../components/shared/SafeAreaView';
import ScrollView from '../../components/shared/ScrollView';
import { Body1, Caption2 } from '../../components/shared/typography';
import View from '../../components/shared/View';
import { HomeStackScreenProps } from '../../types/navigation';

interface CreateItineraryProps
  extends HomeStackScreenProps<'CreateItinerary'> {}

const CreateItinerary: React.FC<CreateItineraryProps> = (props) => {
  const { navigation, route } = props;
  const { currentStep, steps } = route.params;
  const [selectedLocations, setSelectedLocations] = React.useState<
    { id: string }[]
  >([]);

  const handleNavigation = () => {
    navigation.navigate('CreateItinerary', {
      currentStep: currentStep === steps ? 1 : currentStep + 1,
      steps: steps,
    });
  };

  let Comp = null;

  const handleLocationSelect = (id: string) => {
    setSelectedLocations((prevState) => {
      const isSelected = prevState.find((location) => location.id === id);
      if (isSelected) {
        return prevState.filter((location) => location.id !== id);
      } else {
        return [...prevState, { id }];
      }
    });
  };

  switch (currentStep) {
    case 1:
      Comp = <Step1Comp handleNavigation={handleNavigation} />;
      break;
    case 2:
      Comp = (
        <Step2Comp
          handleLocationSelect={handleLocationSelect}
          handleNavigation={handleNavigation}
          selectedLocations={selectedLocations}
        />
      );
      break;
  }

  return (
    <SafeAreaView flex={1} bg='primary'>
      <View
        direction='row'
        justify='space-between'
        mt='m'
        px='l'
        align='center'
      >
        <Button onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/images/arrow-left.png')} />
        </Button>
        <Body1 color='white'>Plan your trip</Body1>
        <View size={24}>
          {currentStep === 2 && (
            <>
              <Image source={require('../../assets/images/gallery.png')} />
              <View
                bg='red'
                size={16}
                pos='absolute'
                isRound
                place='center'
                top={-4}
                right={0}
              >
                <Caption2 color='white'>{selectedLocations.length}</Caption2>
              </View>
            </>
          )}
        </View>
      </View>
      <View direction='row' place='center' my='l'>
        {Array(steps)
          .fill(0)
          .map((_, index) => {
            const passed = index + 1 < currentStep;
            const completed = currentStep > index;
            return (
              <>
                <View
                  bg='white'
                  alpha={completed ? 1 : 0.5}
                  key={index}
                  size={40}
                  isRound
                  place='center'
                >
                  <Body1 color={completed ? 'primary' : 'white'}>
                    {passed ? '✓' : index + 1}
                  </Body1>
                </View>
                {index < steps - 1 && (
                  <Body1 key={(Math.random() * 1000).toString()} color='white'>
                    . . . . . . . .
                  </Body1>
                )}
              </>
            );
          })}
      </View>
      <Card borderRadius={['l', 0]} flex={1} px='l' pt='m'>
        <View place='center' mb='l'>
          <Indicator />
        </View>
        {Comp}
      </Card>
    </SafeAreaView>
  );
};

const Step1Comp: React.FC<{ handleNavigation: () => void }> = ({
  handleNavigation,
}) => {
  return (
    <>
      <View>
        <FormField
          leftIcon={
            <Image
              source={require('../../assets/images/current-location.png')}
            />
          }
          placeholder='Current location'
        />
        <FormField
          leftIcon={
            <Image source={require('../../assets/images/location.png')} />
          }
          placeholder='When are you going?'
        />
        <Card pos='absolute' borderRadius={20} top='30%' right={0}>
          <Button p='s'>
            <MaterialCommunityIcons
              name='swap-vertical'
              size={24}
              color='gray'
            />
          </Button>
        </Card>
      </View>
      <FormField
        leftIcon={
          <Image source={require('../../assets/images/calendar.png')} />
        }
        placeholder='Departure date'
      />
      <FormField
        leftIcon={
          <Image size={24} source={require('../../assets/images/clock.png')} />
        }
        placeholder='Trip duration'
      />
      <ButtonWithText label='Search' onPress={handleNavigation} />
    </>
  );
};

const gallery = [
  {
    id: '1',
    image: require('../../assets/images/image1.png'),
  },
  {
    id: '2',

    image: require('../../assets/images/image2.png'),
  },
  {
    id: '3',
    image: require('../../assets/images/image3.png'),
  },
  {
    id: '4',
    image: require('../../assets/images/image4.png'),
  },
  {
    id: '5',
    image: require('../../assets/images/image5.png'),
  },
  {
    id: '6',
    image: require('../../assets/images/image6.png'),
  },
  {
    id: '7',
    image: require('../../assets/images/image7.png'),
  },
  {
    id: '8',
    image: require('../../assets/images/image8.png'),
  },
];

interface Step2CompProps {
  handleNavigation: () => void;
  handleLocationSelect: (index: string) => void;
  selectedLocations: { id: string }[];
}

const Step2Comp: React.FC<Step2CompProps> = (props) => {
  const { handleNavigation, handleLocationSelect, selectedLocations } = props;
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View direction='row' justify='center'>
          <View mr='m'>
            {gallery.map(({ image, id }, index) => {
              return index % 2 == 0 ? (
                <Button
                  bg='#000'
                  key={id}
                  onPress={() => handleLocationSelect(id)}
                  mb='m'
                  borderRadius='s'
                >
                  <Image
                    borderRadius='s'
                    w={160}
                    h={150}
                    source={image}
                    style={{
                      opacity: selectedLocations.find(
                        (location) => location.id === id
                      )
                        ? 0.3
                        : 1,
                    }}
                  />
                </Button>
              ) : null;
            })}
          </View>
          <View>
            {gallery.map(({ image, id }, index) => {
              return index % 2 !== 0 ? (
                <Button
                  bg='#000'
                  key={id}
                  onPress={() => handleLocationSelect(id)}
                  mb='m'
                  borderRadius='s'
                >
                  <Image
                    borderRadius='s'
                    w={160}
                    h={150}
                    source={image}
                    style={{
                      opacity: selectedLocations.find(
                        (location) => location.id === id
                      )
                        ? 0.3
                        : 1,
                    }}
                  />
                </Button>
              ) : null;
            })}
          </View>
        </View>
      </ScrollView>
      <ButtonWithText
        pos='absolute'
        label='Next'
        w='100%'
        alignS='center'
        bottom={20}
        onPress={handleNavigation}
      />
    </>
  );
};

export default CreateItinerary;
