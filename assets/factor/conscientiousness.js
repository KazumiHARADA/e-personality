export default {
  domain: 'C',
  title: '誠実性',
  shortDescription:
    '誠実性は自身の衝動をどの程度抑制できるかを示す度合いです。',
  description: `Impulses are not inherently bad;
occasionally time constraints require a snap decision, and acting on
our first impulse can be an effective response. Also, in times of
play rather than work, acting spontaneously and impulsively can be
fun. Impulsive individuals can be seen by others as colorful,
fun-to-be-with, and zany.
<br /><br />
Nonetheless, acting on impulse can lead to trouble in a number of
ways. Some impulses are antisocial. Uncontrolled antisocial acts
not only harm other members of society, but also can result in
retribution toward the perpetrator of such impulsive acts. Another
problem with impulsive acts is that they often produce immediate
rewards but undesirable, long-term consequences. Examples include
excessive socializing that leads to being fired from one's job,
hurling an insult that causes the breakup of an important
relationship, or using pleasure-inducing drugs that eventually
destroy one's health.
<br /><br />
Impulsive behavior, even when not seriously destructive, diminishes
a person's effectiveness in significant ways. Acting impulsively
disallows contemplating alternative courses of action, some of which
would have been wiser than the impulsive choice. Impulsivity also
sidetracks people during projects that require organized sequences
of steps or stages. Accomplishments of an impulsive person are
therefore small, scattered, and inconsistent.
<br /><br />
A hallmark of intelligence, what potentially separates human beings
from earlier life forms, is the ability to think about future
consequences before acting on an impulse. Intelligent activity
involves contemplation of long-range goals, organizing and planning
routes to these goals, and persisting toward one's goals in the face
of short-lived impulses to the contrary. The idea that intelligence
involves impulse control is nicely captured by the term prudence, an
alternative label for the Conscientiousness domain. Prudent means
both wise and cautious.
<br /><br/>
Persons who score high on the
Conscientiousness scale are, in fact, perceived by others as intelligent.
The benefits of high conscientiousness are obvious. Conscientious
individuals avoid trouble and achieve high levels of success through
purposeful planning and persistence. They are also positively
regarded by others as intelligent and reliable. On the negative
side, they can be compulsive perfectionists and workaholics.
Furthermore, extremely conscientious individuals might be regarded
as stuffy and boring.
<br /><br />
Unconscientious people may be criticized for
their unreliability, lack of ambition, and failure to stay within
the lines, but they will experience many short-lived pleasures and
they will never be called stuffy.`,
  results: [
    {
      key: 'low',
      text: `あなたは自分の欲求をコントロールすることが苦手で、気の向くままに行動することが多いです。`
    },
    {
      key: 'neutral',
      text: `あなたは程々に自分をコントロールできていて、自分の欲求を発散するかどうかをその時に応じて選んでいます。`
    },
    {
      key: 'high',
      text: `あなたは自分の欲求をコントロールすることが得意で、周りからは真面目で勤勉だと見られることが多いです。`
    }
  ],
  facets: [
    {
      facet: 1,
      title: '自信',
      text: `自信のスコアが高い人は自分が成功するために必要なものを持っているという自負があります。
      自信のスコアが低い人は、自己肯定感が低く、自分の人生をコントロールできていないと感じるかもしれません。`
    },
    {
      facet: 2,
      title: '規則',
      text: `規則のスコアが高い人は、ルーティーンやスケジュール通りの生活を好みます。
      規則のスコアが低い人は、計画を立てることが好きではなく、その時の興味に沿った行動をとる傾向があります。`
    },
    {
      facet: 3,
      title: '忠実',
      text: `忠実のスコアが高い人は、道徳的な義務感を強く感じます。
      忠実のスコアが低い人はルールや規制を疎ましく感じます。
      `
    },
    {
      facet: 4,
      title: '努力',
      text: `努力のスコアが高い人はゴールに向かってひたむきに努力することができます。
      特に高いスコアの人はあまりにもひたむきすぎるため、仕事人間と見られることがあるかもしれません。
      努力のスコアが低い人は最小限の作業で満足するタイプの人で、しばしば怠け者とみられることがあります。
      `
    },
    {
      facet: 5,
      title: '自制',
      text: `自制のスコアが高い人は、難しいタスクでも完了するまで継続することができます。
      自制のスコアが低い人は、嫌なことを先延ばしにして、タスクを完了できない傾向があります。`
    },
    {
      facet: 6,
      title: '慎重',
      text: `慎重のスコアが高い人は、行動する前に深く考えます。そのため決定には時間をかける傾向があります。
      慎重のスコアが低い人は、頭に浮かんだことをすぐに行動に移したり、代替案を考えることをしない傾向があります。`
    }
  ],
  chartSettings: {
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)'
  }
}
