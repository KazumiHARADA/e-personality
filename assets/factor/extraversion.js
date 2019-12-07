module.exports = {
  domain: 'E',
  title: '外向性',
  shortDescription:
    '外向性は、ポジティブなことにどの程度反応を示すかの度合いである。',
  description: `Extraverts enjoy being with people, are full of energy, and
often experience positive emotions. They tend to be enthusiastic,
action-oriented, individuals who are likely to say "Yes!" or "Let's
go!" to opportunities for excitement. In groups they like to talk,
assert themselves, and draw attention to themselves.
<br /><br />
Introverts lack the exuberance, energy, and activity levels of
extraverts. They tend to be quiet, low-key, deliberate, and
disengaged from the social world. Their lack of social involvement
should not be interpreted as shyness or depression; the
introvert simply needs less stimulation than an extravert and prefers
to be alone. <br /><br />The independence and reserve of the introvert is
sometimes mistaken as unfriendliness or arrogance. In reality, an
introvert who scores high on the agreeableness dimension will not
seek others out but will be quite pleasant when approached.`,
  results: [
    {
      score: '低い',
      text: `あなたは、社交にあまり価値を見出さず少数での行動や静かな環境を好む傾向があります。友人の数は少なく、親しい友人が２、３人であることが多いです。`
    },
    {
      score: '中間',
      text: `あなたは一人の時も大勢でいる時も楽しむことができます。`
    },
    {
      score: '高い',
      text: `あなたは、社交的でエネルギッシュです。一人でいることよりも大勢といることを好みます。`
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
  chartSettings: {
    backgroundColor: 'rgba(255, 206, 86, 0.2)',
    borderColor: 'rgba(255, 206, 86, 1)'
  }
}
