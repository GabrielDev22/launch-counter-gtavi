export interface CharacterTrait {
  label: string;
  value: string;
}

export interface Character {
  id: number;
  name: string;
  role: string;
  subtitle: string;
  description: string;
  traits: CharacterTrait[];
  confirmedIn: string;
  theme: 'lucia' | 'jason';
}
