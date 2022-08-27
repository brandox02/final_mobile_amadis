import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//galio
import { Block, Text, theme } from 'galio-framework';

import { articles, nowTheme } from '../constants/';
import { Card } from '../components/';

class Articles extends React.Component {
  renderCards = () => {
    return (
      <Block style={styles.container}>
        <Text size={16} style={styles.title}>
          Tipos de Multas
        </Text>

        <Card
          item={{
            title: 'Multas para cuidadanos corruptos',
            image: require('../assets/imgs/fine2.jpeg'),
            cta: 'View article',
            horizontal: true,
          }}
          full
        />
        <Card
          item={{
            title: 'Multas para empresarios abruptos',
            image: require('../assets/imgs/fine2.jpeg'),
            cta: 'View article',
            horizontal: true,
          }}
          full
        />

        <Card
          item={{
            title: 'Multas para personas decentes',
            image: require('../assets/imgs/fine2.jpeg'),
            cta: 'View article',
            horizontal: true,
          }}
          full
        />
      </Block>
    );
  };

  render() {
    return (
      <Block flex>
        <ScrollView showsVerticalScrollIndicator={false}>{this.renderCards()}</ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.SIZES.BASE,
  },
  title: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE,
    marginTop: 44,
    color: nowTheme.COLORS.HEADER,
  },
});

export default Articles;
