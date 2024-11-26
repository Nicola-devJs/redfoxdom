interface Property {
  id: number;
  name: string;
  email: string;
}

export interface PropertiesDTO {
  data: Property[];
  count: number;
}
