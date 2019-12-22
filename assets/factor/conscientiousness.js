export default {
  domain: 'C',
  title: '誠実性',
  shortDescription:
    '誠実性は自身の衝動をどの程度抑制できるかを示す度合いです。',
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
  shortFacets: [
    {
      facet: 1,
      title: '自信',
      results: [
        {
          key: 'low',
          text: `自己肯定感が低く、自分の人生をコントロールできていないと感じるかもしれません。`,
          feature: '自信ない',
          shortFeature: ''
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `自分が成功するために必要なものを持っているという自負があります。`,
          feature: '自信家',
          shortFeature: '自信家'
        }
      ]
    },
    {
      facet: 2,
      title: '規則',
      results: [
        {
          key: 'low',
          text: `あまり計画を立てることがなく、その時の興味に沿った行動をとります。`,
          feature: '成り行きまかせ',
          shortFeature: '成り行きまかせ'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `ルーティーンやスケジュール通りの生活が好きで、急なスケジュールの変更を嫌います。`,
          feature: '計画性がある',
          shortFeature: '計画性がある'
        }
      ]
    },
    {
      facet: 3,
      title: '忠実',
      results: [
        {
          key: 'low',
          text: `ルールや規制を疎ましく感じます。`,
          feature: '自分のやり方を突き通す',
          shortFeature: '自己流'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `道徳的な義務感を強く感じます。`,
          feature: '郷に入っては郷に従う',
          shortFeature: '周りに合わせる'
        }
      ]
    },
    {
      facet: 4,
      title: '努力',
      results: [
        {
          key: 'low',
          text: `最小限の作業で満足するタイプの人で、しばしば怠け者とみられることがあります。`,
          feature: 'やることは最小限がベスト',
          shortFeature: '怠け者'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `ゴールに向かってひたむきに努力することができます。特に高いスコアの人はあまりにもひたむきすぎるため、仕事人間と見られることがあります。`,
          feature: '努力家',
          shortFeature: '努力家'
        }
      ]
    },
    {
      facet: 5,
      title: '自制',
      results: [
        {
          key: 'low',
          text: `嫌なことを先延ばしにして、タスクを完了できない傾向があります。`,
          feature: '何事にもルーズになりがち',
          shortFeature: 'ルーズ'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `難しいタスクでも完了するまで継続することができます。`,
          feature: '勤勉',
          shortFeature: '勤勉'
        }
      ]
    },
    {
      facet: 6,
      title: '慎重',
      results: [
        {
          key: 'low',
          text: `頭に浮かんだことをすぐに行動に移したり、代替案を考えることをしない傾向があります。`,
          feature: '衝動的',
          shortFeature: '行動派'
        },
        {
          key: 'neutral',
          text: ``,
          feature: '',
          shortFeature: ''
        },
        {
          key: 'high',
          text: `行動する前に深く考えます。そのため決定には時間をかける傾向があります。`,
          feature: '慎重派',
          shortFeature: '慎重派'
        }
      ]
    }
  ],
  chartSettings: {
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderHexColor: '#36a3eb'
  }
}
