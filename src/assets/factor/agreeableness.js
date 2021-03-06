export default {
  domain: 'A',
  title: '調和性',
  shortDescription:
    '調和性は他人の心の状態にどの程度注意をはらうかを示す度合いです。',
  results: [
    {
      key: 'low',
      text: `他人の考えより自分の考えを優先します。周りの人からは「批判的」「意固地」と言った印象をもたれることがあります。`
    },
    {
      key: 'neutral',
      text: `基本的には自分を他人のために犠牲にしたくないですが、時々他人の思いを尊重することもあります。`
    },
    {
      key: 'high',
      text: `他人の幸せにとても敏感です。周りの人からは「一緒にいて居心地が良い」「協力的」「信頼できる」と言った印象をもたれることがあります。`
    }
  ],
  facets: [
    {
      facet: 1,
      title: '信頼',
      text: `信頼のスコアが高い人は、公明正大で正直な人が多いです。また困っている人がいると放っておけないといった性質があります。
      信頼のスコアが低い人は、利己的で、不正を厭わず、危険な性質を秘めていると言えます。`
    },
    {
      facet: 2,
      title: '道徳',
      text: `道徳のスコアが高い人は、他人に対して取り繕うことがなく、率直でかつ誠実な傾向があります。
      道徳のスコアが低い人は、人間関係を構築する際に多くのことを取り繕う傾向があります。一般的にこのスコアが高い人は
      他人から仲良くなりやすいと見なされますが、スコアの低い人はすぐには関係が築けないとみなされるでしょう。しかし、低スコアの人が
      不道徳なわけでは決してなく、単純に自分を強く守る傾向があるということです。
      `
    },
    {
      facet: 3,
      title: '利他',
      text: `利他のスコアが高い人は、他人を助けることに喜びを感じる傾向があり、他人を助けることは自己犠牲ではなく
      自分のためでもあると考えます。
      利他のスコアが低い人は、基本的に他人を助けることを好みません。他人を助けることは自己犠牲以外の何者でもないと考えます。
     `
    },
    {
      facet: 4,
      title: '協力',
      text: `協力のスコアが高い人は、対立することを嫌います。
      そのため何か意見や要求があったとしても、対立する可能性が少しでもあればすぐに妥協する傾向があります。
      協力のスコアが低い人は、たとえ対立したとしても自分の要求を通すために行動することが多いです。
      その結果、他者を威圧したり、脅したりすることもあります。`
    },
    {
      facet: 5,
      title: '謙虚',
      text: `謙虚のスコアが高い人は、仮に相手より自分が優れていたとしても主張することを好みません。
      このスコアの高さは、自信や自尊心が低いことに起因している場合もあります。
      謙虚のスコアが低い人は、自尊心が高く、自分が他人より優れていることを誇示したいと考えます。
      その結果、他人からは傲慢だと見なされる傾向があります。
      `
    },
    {
      facet: 6,
      title: '共感',
      text: `共感のスコアが高い人は、心優しい人です。他人の痛みにすぐ共感できる人が多いです。
      共感のスコアが低い人は、他人の苦しみにあまり影響を受けません。感情ではなく理論的に判断することを好み、
      慈悲や同情よりも真実と公平な判断に重きをおく傾向があります。
      `
    }
  ],
  shortFacets: [
    {
      facet: 1,
      title: '信頼',
      results: [
        {
          key: 'low',
          text: `利己的で、不正を行うことをあまり躊躇しません。`,
          feature: '自己中心的',
          shortFeature: '自己中心的'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `公明正大で正直な人が多いです。また困っている人がいると放っておけないといった性質があります。`,
          feature: '面倒見がいい',
          shortFeature: '面倒見がいい'
        }
      ]
    },
    {
      facet: 2,
      title: '道徳',
      results: [
        {
          key: 'low',
          text: `人間関係を構築する際に多くのことを取り繕う傾向があります。`,
          feature: '近寄りがたい',
          shortFeature: '近寄りがたい'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `他人に対して取り繕うことがなく、率直でかつ誠実な傾向があります。`,
          feature: 'フレンドリー',
          shortFeature: 'フレンドリー'
        }
      ]
    },
    {
      facet: 3,
      title: '利他',
      results: [
        {
          key: 'low',
          text: `基本的に他人を助けることを好みません。他人を助けることは自己犠牲以外の何者でもないと考える傾向があります。`,
          feature: '自己中心的',
          shortFeature: '自己中心的'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `他人を助けることに喜びを感じるタイプです。他人を助けることは自己犠牲ではなく自分のためでもあると考える傾向があります。`,
          feature: '親切で良心的',
          shortFeature: '親切'
        }
      ]
    },
    {
      facet: 4,
      title: '協力',
      results: [
        {
          key: 'low',
          text: `自分の要求を通すことを優先して行動することが多いです。目的のためには他人を威圧したり、脅したりすることもあります。`,
          feature: '自分の思いが一番大事',
          shortFeature: '自分が一番'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `対立することを嫌い、調和を重んじます。そのため何か意見や要求があったとしても、対立する可能性が少しでもあればすぐに妥協する傾向があります。`,
          feature: '平和主義',
          shortFeature: 'みんなで仲良く'
        }
      ]
    },
    {
      facet: 5,
      title: '謙虚',
      results: [
        {
          key: 'low',
          text: `自尊心が高く、自分が他人より優れていることを誇示したい傾向があります。他人からは「傲慢」と言った印象をもたれることがあるでしょう。`,
          feature: '率直',
          shortFeature: '高い自尊心'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `相手より自分が優れてい場合でも主張することを好みません。謙虚なのではなく、自信や自尊心が低い場合もあります。`,
          feature: '自分に自信がない',
          shortFeature: '謙虚'
        }
      ]
    },
    {
      facet: 6,
      title: '共感',
      results: [
        {
          key: 'low',
          text: `感情ではなく論理的に判断することを好み、慈悲や同情よりも真実と公平な判断に重きをおく傾向があります。他人の苦しみにはあまり影響を受けません。`,
          feature: '冷徹・論理的',
          shortFeature: '論理的'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `他人の痛みにすぐ共感できる人が多く、他人からは「優しい」と言った印象をもたれることがあるでしょう。`,
          feature: '優しい',
          shortFeature: '優しい'
        }
      ]
    }
  ],
  chartSettings: {
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderHexColor: '#ff6385'
  }
}

export const setting = {
  backgroundColor: 'rgba(255, 99, 132, 0.2)',
  borderColor: 'rgba(255, 99, 132, 1)',
  borderHexColor: '#ff6385',
  iconHexColor: '#eaa8bf'
}
