module.exports = {
  domain: 'A',
  title: '調和性',
  shortDescription:
    '調和性は他人の心の状態に注意をはらう度合いを示しています。',
  description: `調和性のスコアが高い人は、他者をたすけ、調和的な対人関係をもち、良好な社会的サポートをもつ傾向があります。
  人と争ったり侮辱することは滅多になく、他者からは協力的で信頼できると言った印象を持たれやすいです。
  調和性の高さは、良き社会的な関係という面では有益になりますが、個人的な成功という面ではコストになります。
  調和性のスコアが低い人は、あまり他者を助けたりせず、一人でいることを好む傾向があります。
  そのため冷淡や敵対的と言った印象をもたれることがあります。しかしながら、他者を顧みず自分の道を突き進んでいけるため
  個人的な成功を掴みやすい傾向があります。
  `,
  results: [
    {
      score: '低い', // do not translate this line
      text: `あなたの調和性は低いです。 他人の考えより自分の考えを優先し、周りの人はあなたのことを「厳しい」「批判的」「意固地」と言った印象をもつでしょう。`
    },
    {
      score: '中間', // do not translate this line
      text: `あなたの調和性は平均的です。時々他人の思いに応えることもありますが、基本的には自分を他人のために犠牲にしたくないでしょう。`
    },
    {
      score: '高い', // do not translate this line
      text: `あなたの調和性は高いです。高い調和性はあなたが他人がよくなることにとても興味があることを示します。周りの人はあなたのことを「一緒にいて居心地が良い」「協力的」「信頼できる」と言った印象をもつでしょう。
      `
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Trust',
      text: `A person with high trust assumes that most people
are fair, honest, and have good intentions. Persons low in trust
see others as selfish, devious, and potentially dangerous.`
    },
    {
      facet: 2,
      title: 'Morality',
      text: `High scorers on this scale see no need for
pretense or manipulation when dealing with others and are therefore
candid, frank, and sincere. Low scorers believe that a certain
amount of deception in social relationships is necessary. People
find it relatively easy to relate to the straightforward
high-scorers on this scale. They generally find it more difficult
to relate to the unstraightforward low-scorers on this scale. It
should be made clear that low scorers are not unprincipled
or immoral; they are simply more guarded and less willing to openly
reveal the whole truth.`
    },
    {
      facet: 3,
      title: 'Altruism',
      text: `Altruistic people find helping other people
genuinely rewarding. Consequently, they are generally willing to
assist those who are in need. Altruistic people find that doing
things for others is a form of self-fulfillment rather than
self-sacrifice. Low scorers on this scale do not particularly like
helping those in need. Requests for help feel like an imposition
rather than an opportunity for self-fulfillment.`
    },
    {
      facet: 4,
      title: 'Cooperation',
      text: `Individuals who score high on this scale
dislike confrontations. They are perfectly willing to compromise or
to deny their own needs in order to get along with others. Those
who score low on this scale are more likely to intimidate others to
get their way.`
    },
    {
      facet: 5,
      title: 'Modesty',
      text: `High scorers on this scale do not like to claim
that they are better than other people. In some cases this attitude
may derive from low self-confidence or self-esteem. Nonetheless,
some people with high self-esteem find immodesty unseemly. Those
whoare willing to describe themselves as superior tend to
be seen as disagreeably arrogant by other people.`
    },
    {
      facet: 6,
      title: 'Sympathy',
      text: `People who score high on this scale are
tenderhearted and compassionate. They feel the pain of others
vicariously and are easily moved to pity. Low scorers are not
affected strongly by human suffering. They pride themselves on
making objective judgments based on reason. They are more concerned
with truth and impartial justice than with mercy.`
    }
  ]
}
