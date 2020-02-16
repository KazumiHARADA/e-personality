export default {
  domain: 'O',
  title: '開放性',
  shortDescription:
    '開放性は、どの程度経験に対して開放的か、心の連想がどの程度つながっているかを示す度合いである。',
  results: [
    {
      key: 'low',
      text: `単純明快であることを好みます。他人からは現実的で、保守的だと見られる傾向があります。`
    },
    {
      key: 'neutral',
      text: `古いことと新しいことの両方を楽しむことができます。また考え方はシンプルでも複雑でもなく程よいため他人からは高学歴に見られることがあります。`
    },
    {
      key: 'high',
      text: `多様性、斬新さ、変化を楽しむことができ、クリエイティブなタイプだと言えるでしょう。`
    }
  ],
  facets: [
    {
      facet: 1,
      title: '想像',
      text: `想像のスコアが高い人は、より面白いものや豊かになるものを考えることが得意です。
      想像のスコアが低い人は、現実的で事実に沿ったものを考えることが得意です。`
    },
    {
      facet: 2,
      title: '芸術への関心',
      text: `芸術への関心のスコアが高い人は、芸術や自然の美しさを好みます。必ずしも芸術に特化しているとは限りませんが、人生の中で美しいものに関心を持つことが多いです。
      芸術への関心のスコアが低い人は、芸術や美しいものに対して興味を持ちません。`
    },
    {
      facet: 3,
      title: '情緒',
      text: `情緒のスコアが高い人は、自分の感情をオープンにする傾向があります。また、自分なりに感情を認識する方法を知っていることが多いです。
      情緒のスコアが低い人は、自分の感情に気付いていないことが多いです。また、感情を隠す傾向があります。`
    },
    {
      facet: 4,
      title: '冒険心',
      text: `冒険心のスコアが高い人は、新しいことをしたり、海外旅行をしたり、様々な挑戦をすることに抵抗がありません。よくルーティーンに飽きて新しい方法を探したり試したりします。
      冒険心のスコアが低い人は、変化を嫌い、ルーティーンを好む傾向があります。`
    },
    {
      facet: 5,
      title: '思考',
      text: `思考のスコアが高い人は、新しいアイディアに寛容で知的な議論をすることを好みます。パズルやなぞなぞをして、頭の体操をすることを楽しめます。
      思考のスコアが低い人は、アイディアを考えるよりも実際のものや人を扱うことの方を好みます。考えるよりもまず行動という人が多いです。`
    },
    {
      facet: 6,
      title: '自由',
      text: `自由のスコアが高い人は、意にそぐわない権力や、慣習、伝統的な考え方に挑戦する傾向があります。
      自由のスコアが低い人は、保守的で安全と安定を好みます。`
    }
  ],
  shortFacets: [
    {
      facet: 1,
      title: '想像',
      results: [
        {
          key: 'low',
          text: `現実的で事実に沿ったものを考えることが得意です。`,
          feature: 'リアリスト',
          shortFeature: 'リアリスト'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `より面白いものや豊かになるものを考えることが得意です。`,
          feature: 'アイデアマン',
          shortFeature: 'アイデアマン'
        }
      ]
    },
    {
      facet: 2,
      title: '芸術への関心',
      results: [
        {
          key: 'low',
          text: `芸術や美しいものに対してあまり興味を持ちません。`,
          feature: '実用性重視',
          shortFeature: '実用性重視'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `芸術や自然の美しさを好みます。必ずしも芸術に特化しているとは限りませんが、人生の中で美しいものに関心を持つことが多いです。`,
          feature: '美的感覚が鋭い',
          shortFeature: '美的感覚が鋭い'
        }
      ]
    },
    {
      facet: 3,
      title: '情緒',
      results: [
        {
          key: 'low',
          text: `自分の感情に気付いていないことが多いです。また、感情を隠す傾向があります。`,
          feature: '自分のことをあまり語らない',
          shortFeature: '自分語りが嫌い'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `自分の感情をオープンにする傾向があります。また、自分なりに感情を認識する方法を知っていることが多いです。`,
          feature: '洞察力がある',
          shortFeature: '洞察力が高い'
        }
      ]
    },
    {
      facet: 4,
      title: '冒険心',
      results: [
        {
          key: 'low',
          text: `変化を嫌い、ルーティーンを好む傾向があります。`,
          feature: '安定的な毎日が好き',
          shortFeature: '安定的'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `新しいことをしたり、海外旅行をしたり、様々な挑戦をすることに抵抗がありません。よくルーティーンに飽きて新しい方法を探したり試したりします。`,
          feature: '新しいことが好き',
          shortFeature: '新しいもの好き'
        }
      ]
    },
    {
      facet: 5,
      title: '思考',
      results: [
        {
          key: 'low',
          text: `アイディアを考えるよりも実際のものや人を扱うことの方を好みます。考えるよりもまず行動という人が多いです。`,
          feature: '何事もとりあえずやってみる',
          shortFeature: 'まずは行動'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `新しいアイディアに寛容で知的な議論をすることを好みます。パズルやなぞなぞをして、頭の体操をすることを楽しめます。`,
          feature: '頭の回転が速い',
          shortFeature: '頭がキレる'
        }
      ]
    },
    {
      facet: 6,
      title: '自由',
      results: [
        {
          key: 'low',
          text: `保守的で安全と安定を好みます。`,
          feature: '保守的',
          shortFeature: '保守的'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `意にそぐわない権力や、慣習、伝統的な考え方に挑戦する傾向があります。`,
          feature: '革新的',
          shortFeature: '革新的'
        }
      ]
    }
  ],
  chartSettings: {
    backgroundColor: 'rgba(153, 102, 255, 0.2)',
    borderColor: 'rgba(153, 102, 255, 1)',
    borderHexColor: '#9966ff'
  }
}

export const setting = {
  backgroundColor: 'rgba(153, 102, 255, 0.2)',
  borderColor: 'rgba(153, 102, 255, 1)',
  borderHexColor: '#9966ff',
  iconHexColor: '#744199'
}
