export interface ICharacterUpgrade {
  id: string;
  selected: boolean;
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
    finger1?: string;
    finger2?: string;
    trinket?: string;
    trinket1?: string;
    trinket2?: string;
    main_hand?: string;
    one_hand?: string;
    off_hand?: string;
  };
}
