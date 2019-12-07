module.exports = {
  domain: 'O',
  title: '経験への開放性',
  shortDescription:
    '経験への開放性は、どの程度経験に対して開放的か、心の連想がどの程度つながっているかを示す度合いである。',
  description: `Open people are intellectually curious,
appreciative of art, and sensitive to beauty. They tend to be,
compared to closed people, more aware of their feelings. They tend to
think and act in individualistic and nonconforming
ways. Intellectuals typically score high on Openness to Experience;
consequently, this factor has also been called Culture or
Intellect. <br /><br />Nonetheless, Intellect is probably best regarded as one aspect of openness
to experience. Scores on Openness to Experience are only modestly
related to years of education and scores on standard intelligent tests.
<br /><br />
Another characteristic of the open cognitive style is a facility for thinking
in symbols and abstractions far removed from concrete experience. Depending on
the individual's specific intellectual abilities, this symbolic cognition may
take the form of mathematical, logical, or geometric thinking, artistic and
metaphorical use of language, music composition or performance, or one of the
many visual or performing arts.
<br /><br />
People with low scores on openness to experience tend to have narrow, common
interests. They prefer the plain, straightforward, and obvious over the
complex, ambiguous, and subtle. They may regard the arts and sciences with
suspicion, regarding these endeavors as abstruse or of no practical use.
Closed people prefer familiarity over novelty; they are conservative and
resistant to change.
<br /><br />
Openness is often presented as healthier or more mature by psychologists, who
are often themselves open to experience. However, open and closed styles of
thinking are useful in different environments. The intellectual style of the
open person may serve a professor well, but research has shown that closed
thinking is related to superior job performance in police work, sales, and
a number of service occupations.`,
  results: [
    {
      score: '低い',
      text: `あなたは、単純で明快に考えることを好みます。他人からは現実的で、保守的だと見られる傾向があります。`
    },
    {
      score: '中間',
      text: `あなたは、古いことと新しいことの両方を楽しむことができます。また、考え方はシンプルでも複雑でもなく程よいため他人からは高学歴に見られることがあります。`
    },
    {
      score: '高い',
      text: `あなたは、多様性、斬新さ、変化を楽しむことができ、クリエイティブなタイプだと言えるでしょう。`
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
  chartSettings: {
    backgroundColor: 'rgba(153, 102, 255, 0.2)',
    borderColor: 'rgba(153, 102, 255, 1)'
  }
}
