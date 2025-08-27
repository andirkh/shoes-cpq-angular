export const COLOR_WAY: { value: string; label: string }[] = [
  { value: 'red', label: 'University Red' },
  { value: 'blue', label: 'Majorelle Blue' },
  { value: 'yellow', label: 'Canary' },
  { value: '#1f1f1f', label: 'Black' },
  { value: '#ffffff', label: 'White' },
  { value: '#ffd2b4', label: 'Peach' },
  { value: '#01796f', label: 'Pine Green' },
  { value: '#808080', label: 'Cool Grey' },
  { value: '#800000', label: 'Burgundy' },
  { value: '#003366', label: 'Midnight Blue' },
  { value: '#28340A', label: 'Turtle Green' },
];

export const COLOR_STITCHING: { value: string; label: string }[] = [
  { value: '#1f1f1f', label: 'Black' },
  { value: '#ffffff', label: 'White' },
];

export const COLOR_RUBBER: { value: string; label: string }[] = [
  { value: '#1f1f1f', label: 'Black' },
  { value: '#ffffff', label: 'White' },
  { value: '#BE792F', label: 'Gum' },
];

export const COLOR_INNER: { value: string; label: string }[] = [
  { value: '#1f1f1f', label: 'Black' },
  { value: '#ffffff', label: 'White' },
];

export const COLOR_OUTSOLE: { value: string; label: string }[] = [
  { value: '#FF7F50', label: 'Coral' },
  { value: '#7FFF00', label: 'Green' },
  { value: 'blue', label: 'Royale Blue' },
  { value: '#87ceeb', label: 'Baby Blue' },
  { value: '#800000', label: 'Burgundy' },
  { value: '#1f1f1f', label: 'Black' },
  { value: '#ffffff', label: 'White' },
  { value: '#542A0C', label: 'Dark Brown' },
];

export const CUSTOMIZE_FORM: {
  shoePartName: string;
  stateName:
    | 'upperSideColor'
    | 'upperTopColor'
    | 'upperLiningColor'
    | 'quarterColor'
    | 'tongueColor'
    | 'innerColor'
    | 'backTabColor'
    | 'toeCapColor'
    | 'secondToeCapColor'
    | 'midSoleColor'
    | 'outSoleColor'
    | 'wovenColor'
    | 'stitchingColor';
  colors: { value: string; label: string }[];
}[] = [
  {
    shoePartName: 'Upper',
    stateName: 'upperSideColor',
    colors: COLOR_WAY,
  },
  {
    shoePartName: 'Upper Top',
    stateName: 'upperTopColor',
    colors: COLOR_WAY,
  },
  {
    shoePartName: 'Upper Lining',
    stateName: 'upperLiningColor',
    colors: COLOR_WAY,
  },
  {
    shoePartName: 'Quarter',
    stateName: 'quarterColor',
    colors: COLOR_WAY,
  },
  {
    shoePartName: 'Tongue',
    stateName: 'tongueColor',
    colors: COLOR_WAY,
  },
  {
    shoePartName: 'Inner',
    stateName: 'innerColor',
    colors: COLOR_INNER,
  },
  {
    shoePartName: 'Back Tab',
    stateName: 'backTabColor',
    colors: COLOR_WAY,
  },
  {
    shoePartName: 'Toe Cap',
    stateName: 'toeCapColor',
    colors: COLOR_RUBBER,
  },
  {
    shoePartName: 'Bumper',
    stateName: 'secondToeCapColor',
    colors: COLOR_RUBBER,
  },
  {
    shoePartName: 'Mid Sole',
    stateName: 'midSoleColor',
    colors: COLOR_RUBBER,
  },
  {
    shoePartName: 'Out Sole',
    stateName: 'outSoleColor',
    colors: COLOR_OUTSOLE,
  },
  {
    shoePartName: 'Woven Tag',
    stateName: 'wovenColor',
    colors: COLOR_WAY,
  },
  {
    shoePartName: 'Stitching',
    stateName: 'stitchingColor',
    colors: COLOR_STITCHING,
  },
];

export const COLOR_DEFAULT = 'white';

export const COLOR_DEFAULT_WHITE = '#ffffff';

export const COLOR_DEFAULT_BLACK = '#000000';

