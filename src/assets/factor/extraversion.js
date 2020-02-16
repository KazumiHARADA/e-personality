export default {
  domain: 'E',
  title: '外向性',
  shortDescription:
    '外向性は、ポジティブなことにどの程度反応を示すかの度合いである。',
  results: [
    {
      key: 'low',
      text: `少数での行動や静かな環境が好きです。友人の数は少なく、親しい友人が２、３人であることが多いです。`
    },
    {
      key: 'neutral',
      text: `一人の時も大勢でいる時も楽しむことができます。`
    },
    {
      key: 'high',
      text: `社交的でエネルギッシュな人です。一人でいることよりも大勢といることを好みます。`
    }
  ],
  facets: [
    {
      facet: 1,
      title: '親しみ',
      text: `親しみのスコアが高い人は、オープンであり、他人と仲良くなることが得意です。
      親のスコアが低い人は、遠慮がちで人見知りだと見られることがあります。`
    },
    {
      facet: 2,
      title: '集団適性',
      text: `集団適性のスコアが高い人は、会社のような集団の中でもですぐにやりがいや刺激的なことを見つけることができます。
      集団適性のスコアが低い人は、大勢であることに圧倒され集団を避ける傾向があります。プライバシーや自分一人の時間を大切にする傾向があります。`
    },
    {
      facet: 3,
      title: '自己主張',
      text: `自己主張のスコアが高い人は、自ら発言し、他者の活動を指揮することを好みます。一般的にリーダーになることが多いです。
      自己主張のスコアが低い人は、あまり発言せず他人の指示に従うように行動することが多いです。`
    },
    {
      facet: 4,
      title: '活動',
      text: `活動のスコアが高い人は、忙しく毎日を送ることを好みます。精力的に動き回り、多くのことに関与しています。
      活動のスコアが低い人は、ゆっくりと落ち着いた日々を過ごすことを好みます。`
    },
    {
      facet: 5,
      title: '探究',
      text: `探究のスコアが高い人は常に刺激を求めています。新しいことに臆することなくチャレンジする傾向があります。
      探究のスコアが低い人は、刺激に敏感で避ける傾向があります。危険を犯すことはせず安定を求めます。`
    },
    {
      facet: 6,
      title: '前向き',
      text: `前向きのスコアが高い人は、幸福感があり、楽観主義である傾向があります。
      前向きのスコアが低い人は、元気がなく、精力的でない傾向があります。`
    }
  ],
  shortFacets: [
    {
      facet: 1,
      title: '親しみ',
      results: [
        {
          key: 'low',
          text: `遠慮がちで人見知りだと見られることがあります。`,
          feature: '人見知り',
          shortFeature: '人見知り'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `オープンであり、他人と仲良くなることが得意です。`,
          feature: '社交的で話好き',
          shortFeature: '話好き'
        }
      ]
    },
    {
      facet: 2,
      title: '集団適性',
      results: [
        {
          key: 'low',
          text: `大勢であることに圧倒され集団を避ける傾向があります。プライバシーや自分一人の時間を大切にする傾向があります。`,
          feature: '口数が少なく、あまり大勢が好きではない',
          shortFeature: '一人が好き'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `会社のような集団の中でもですぐにやりがいや刺激的なことを見つけることができます。`,
          feature: '根が明るく、ポジティブ',
          shortFeature: 'チームが好き'
        }
      ]
    },
    {
      facet: 3,
      title: '自己主張',
      results: [
        {
          key: 'low',
          text: `あまり発言せず他人の指示に従うように行動することが多いです。`,
          feature: '意思表示はあまりしない',
          shortFeature: '口数少なめ'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `自ら発言し、他者の活動を指揮することを好みます。一般的にリーダーになることが多いです。`,
          feature: 'リーダー向き',
          shortFeature: 'リーダータイプ'
        }
      ]
    },
    {
      facet: 4,
      title: '活動',
      results: [
        {
          key: 'low',
          text: `ゆっくりと落ち着いた日々を過ごすことを好みます。`,
          feature: '落ち着いた日々が好き',
          shortFeature: '落ち着く'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `忙しく毎日を送ることを好みます。精力的に動き回り、多くのことに関与しています。`,
          feature: '活動的',
          shortFeature: '活動的'
        }
      ]
    },
    {
      facet: 5,
      title: '探究',
      results: [
        {
          key: 'low',
          text: `刺激に敏感で避ける傾向があります。危険を犯すことはせず安定を求めます。`,
          feature: '新しいことは苦手',
          shortFeature: '新しいことは苦手'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `常に刺激を求めています。新しいことに臆することなくチャレンジする傾向があります。`,
          feature: '好奇心旺盛',
          shortFeature: '好奇心旺盛'
        }
      ]
    },
    {
      facet: 6,
      title: '前向き',
      results: [
        {
          key: 'low',
          text: `元気がなく、精力的でない傾向があります。`,
          feature: '省エネ派',
          shortFeature: '省エネ派'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `幸福感があり、楽観主義である傾向があります。`,
          feature: '楽観主義者',
          shortFeature: '楽観主義者'
        }
      ]
    }
  ],
  chartSettings: {
    backgroundColor: 'rgba(255, 206, 86, 0.2)',
    borderColor: 'rgba(255, 206, 86, 1)',
    borderHexColor: '#ffcf56'
  }
}

export const setting = {
  backgroundColor: 'rgba(255, 206, 86, 0.2)',
  borderColor: 'rgba(255, 206, 86, 1)',
  borderHexColor: '#ffcf56',
  iconHexColor: '#d8e212'
}
