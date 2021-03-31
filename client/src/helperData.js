const races = [
'Dragonborn',
'Dwarf',
'Elf',
'Gnome',
'Half-Elf',
'Halfling',
'Half-Orc',
'Human',
'Tiefling'
];

const raceAPIStyle = {
  'Dragonborn': 'dragon',
  'Dwarf': 'dwarf',
  'Elf': 'elf',
  'Gnome': 'dnd-gnome',
  'Half-Elf': 'elf',
  'Halfling': 'valyrian',
  'Half-Orc': 'german',
  'Human': 'roman',
  'Tiefling': 'demon'
}

const demeanors = [
  'Altruistic',
  'Caring',
  'Compassionate',
  'Considerate',
  'Faithful',
  'Impartial',
  'Kind',
  'Pleasant',
  'Polite',
  'Sincere',
  'Aggressive',
  'Argumentative',
  'Bossy',
  'Deceitful',
  'Domineering',
  'Flaky',
  'Inconsiderate',
  'Manipulative',
  'Rude',
  'Spiteful',
  'Guarded',
  'Loner',
  'Maverick',
  'Reflective',
  'Reticent',
  'Retiring',
  'Reserved',
  'Self-aware',
  'Sensitive',
  'Shy',
  'Affable',
  'Amiable',
  'Assertive',
  'Authoritative',
  'Charismatic',
  'Enthusiastic',
  'Gregarious',
  'Persuasive',
  'Self-assured',
  'Talkative'
]

module.exports = {
  races: races,
  raceAPIStyle: raceAPIStyle,
  demeanors: demeanors
}