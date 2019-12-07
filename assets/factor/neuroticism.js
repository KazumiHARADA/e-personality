module.exports = {
  domain: 'N',
  title: '神経質性',
  shortDescription:
    '外向性は、ネガティブなことにどの程度反応を示すかの度合いである。',
  description: `Freud originally used the term neurosis to describe a
condition marked by mental distress, emotional suffering, and an
inability to cope effectively with the normal demands of life. He
suggested that everyone shows some signs of neurosis, but that we
differ in our degree of suffering and our specific symptoms of
distress. Today neuroticism refers to the tendency to experience
negative feelings. <br /><br />Those who score high on Neuroticism may
experience primarily one specific negative feeling such as anxiety,
anger, or depression, but are likely to experience several of these
emotions. <br /><br />People high in neuroticism are emotionally reactive. They
respond emotionally to events that would not affect most people, and
their reactions tend to be more intense than normal. They are more
likely to interpret ordinary situations as threatening, and minor
frustrations as hopelessly difficult. <br /><br />Their negative emotional
reactions tend to persist for unusually long periods of time, which
means they are often in a bad mood. These problems in emotional
regulation can diminish a neurotic's ability to think clearly, make
decisions, and cope effectively with stress.`,
  results: [
    {
      score: '低い',
      text: `あなたは穏やかで落ち着いています。多くの人がストレスと感じることであってもあなたの感情が乱されることはないでしょう。`
    },
    {
      score: '中間',
      text: `あなたはストレスのある状況だと多少感情が乱されますが、平常時であれば状況に対処することができます。`
    },
    {
      score: '高い',
      text: `あなたはストレスに敏感で、他の人よりも感情が乱れやすいです。周りの人からは感情的であると見られることが多いでしょう。`
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
  chartSettings: {
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)'
  }
}
