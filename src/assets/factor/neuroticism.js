export default {
  domain: 'N',
  title: '神経質性',
  shortDescription:
    '外向性は、ネガティブなことにどの程度反応を示すかの度合いである。',
  results: [
    {
      key: 'low',
      text: `穏やかで落ち着いています。多くの人がストレスと感じることであってもあなたの感情が乱されることはないでしょう。`
    },
    {
      key: 'neutral',
      text: `ストレスのある状況だと多少感情が乱されますが、平常時であれば状況に対処することができます。`
    },
    {
      key: 'high',
      text: `ストレスに敏感で、他の人よりも感情が乱れやすいです。周りの人からは感情的であると見られることが多いでしょう。`
    }
  ],
  facets: [
    {
      facet: 1,
      title: '不安',
      text: `不安のスコアが高い人は、過剰に危険が迫っていると感じることがあります。よって特定の状況を過度に避けたり、緊張や不安を感じることが多いです。
      不安のスコアが低い人は、穏やかで大胆な傾向があります。`
    },
    {
      facet: 2,
      title: '短気',
      text: `短気のスコアが高い人は、何かうまくいかないことがあるとすぐに怒ります。公正であることに敏感であり、少しでも騙されていると感じると怒りを覚えます。
      短気のスコアが低い人は、簡単には怒らず落ち着いています。`
    },
    {
      facet: 3,
      title: '憂鬱',
      text: `憂鬱のスコアが高い人は、悲しんだり落胆したりすることが多く、活動を始めることを苦手にしています。
      憂鬱のスコアが低い人は、くよくよ悩んだりせず、活動的であることが多いです。`
    },
    {
      facet: 4,
      title: '自意識',
      text: `自意識のスコアが高い人は、他人が自分に対してどう思うかについて敏感です。行き過ぎた自意識は他人を不快にする恐れがあります。
      自意識のスコアが低い人は、他人の自分に持つ印象を見誤ることは少なく、神経質ではないことが多いです。`
    },
    {
      facet: 5,
      title: '過剰',
      text: `過剰のスコアが高い人は、何事も過剰に望む傾向があります。また長期的ではなく短期的な喜びや結果を好みます。
      過剰のスコアが低い人は、過剰な要求をせず、自分を甘やかすことをよしとしません。`
    },
    {
      facet: 6,
      title: '脆さ',
      text: `脆さのスコアが高い人は、強いストレスがかかった時に、パニックや混乱に陥る傾向があります。
      脆さのスコアが低い人は、強いストレス化でも、より落ち着き、適切な判断をすることができます。`
    }
  ],
  shortFacets: [
    {
      facet: 1,
      title: '不安',
      results: [
        {
          key: 'low',
          text: `穏やかで大胆な傾向があります。`,
          feature: '大胆不敵',
          shortFeature: '大胆不敵'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `過剰に危険が迫っていると感じることがあります。よって特定の状況を過度に避けたり、緊張や不安を感じることが多いです。`,
          feature: '動揺しやすい',
          shortFeature: '動揺しやすい'
        }
      ]
    },
    {
      facet: 2,
      title: '短気',
      results: [
        {
          key: 'low',
          text: `簡単には怒らず落ち着いています。`,
          feature: '滅多に怒らない',
          shortFeature: '滅多に怒らない'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `何かうまくいかないことがあるとすぐに怒ります。公正であることに敏感であり、少しでも騙されていると感じると怒りを覚えます。`,
          feature: '感情の起伏が激しい',
          shortFeature: '感情の起伏が激しい'
        }
      ]
    },
    {
      facet: 3,
      title: '憂鬱',
      results: [
        {
          key: 'low',
          text: `くよくよ悩んだりせず、活動的であることが多いです。`,
          feature: '気持ちの切り替えが早い',
          shortFeature: 'くよくよしない'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `悲しんだり落胆したりすることが多く、活動を始めることを苦手にしています。`,
          feature: '嫌なことがあると長期間引きずってしまう',
          shortFeature: 'くよくよしがち'
        }
      ]
    },
    {
      facet: 4,
      title: '自意識',
      results: [
        {
          key: 'low',
          text: `他人の自分に持つ印象を見誤ることは少なく、神経質ではないことが多いです。`,
          feature: '自分らしさを知っている',
          shortFeature: '自分らしさ'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `他人が自分に対してどう思うかについて敏感です。行き過ぎた自意識は他人を不快にする恐れがあります。`,
          feature: '自意識過剰',
          shortFeature: '自意識過剰'
        }
      ]
    },
    {
      facet: 5,
      title: '過剰',
      results: [
        {
          key: 'low',
          text: `過剰な要求をせず、自分を甘やかすことをよしとしません。`,
          feature: '自分に厳しい',
          shortFeature: '自分に厳しい'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `何事も過剰に望む傾向があります。また長期的ではなく短期的な喜びや結果を好みます。`,
          feature: '完璧主義',
          shortFeature: '完璧主義'
        }
      ]
    },
    {
      facet: 6,
      title: '脆さ',
      results: [
        {
          key: 'low',
          text: `強いストレス下でも、より落ち着き、適切な判断をすることができます。`,
          feature: 'ストレス耐性が高い',
          shortFeature: 'ストレスに強い'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `強いストレスがかかった時に、パニックや混乱に陥る傾向があります。`,
          feature: 'ストレス耐性が低い',
          shortFeature: 'ストレスに弱い'
        }
      ]
    }
  ],
  chartSettings: {
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderHexColor: '#4bc0c0'
  }
}

export const setting = {
  backgroundColor: 'rgba(75, 192, 192, 0.2)',
  borderColor: 'rgba(75, 192, 192, 1)',
  borderHexColor: '#4bc0c0',
  iconHexColor: '#009f8c'
}
