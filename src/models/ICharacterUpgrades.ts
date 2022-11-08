export interface ICharacterUpgrade {
  id: string;
  selected: boolean;
  bossName: string;
  name: string;
  role: string;
  class: string;
  upgrades: {
    head?: string;
    shoulder?: string;
    chest?: string;
    wrist?: string;
    hands?: string;
    waist?: string;
    legs?: string;
    feet?: string;
    neck?: string;
    back?: string;
    finger?: string;
    trinket?: string;
    main_hand?: string;
    one_hand?: string;
    off_hand?: string;
  };
}
