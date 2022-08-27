import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme, Text } from 'galio-framework';

import { Card, Button } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.articles}>
        <Block flex>
          <Card
            item={{
              title: 'Multa de tránsito #421',
              image: require(`../assets/imgs/fine5.jpg`),
              cta: '13-02-2022',
              horizontal: true,
            }}
            horizontal
          />
        </Block>
        <Block flex>
          <Card
            item={{
              title: 'Multa de tránsito #422',
              image: require(`../assets/imgs/fine5.jpg`),
              cta: '13-02-2022',
              horizontal: true,
            }}
            horizontal
          />
        </Block>
        <Block flex>
          <Card
            item={{
              title: 'Multa de tránsito #423',
              image: require(`../assets/imgs/fine5.jpg`),
              cta: '13-02-2022',
              horizontal: true,
            }}
            horizontal
          />
        </Block>
        <Block flex>
          <Card
            item={{
              title: 'Multa de tránsito #423',
              image: require(`../assets/imgs/fine5.jpg`),
              cta: '13-02-2022',
              horizontal: true,
            }}
            horizontal
          />
        </Block>
        <Block flex>
          <Card
            item={{
              title: 'Multa de tránsito #424',
              image: require(`../assets/imgs/fine5.jpg`),
              cta: '13-02-2022',
              horizontal: true,
            }}
            horizontal
          />
        </Block>
        <Block flex>
          <Card
            item={{
              title: 'Multa de tránsito #425',
              image: require(`../assets/imgs/fine5.jpg`),
              cta: '13-02-2022',
              horizontal: true,
            }}
            horizontal
          />
        </Block>
        <Block flex>
          <Card
            item={{
              title: 'Multa de tránsito #426',
              image: require(`../assets/imgs/fine5.jpg`),
              cta: '13-02-2022',
              horizontal: true,
            }}
            horizontal
          />
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular',
  },
});

export default Home;
