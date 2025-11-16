import type { Schema, Struct } from '@strapi/strapi';

export interface AboutOurGrowth extends Struct.ComponentSchema {
  collectionName: 'components_about_our_growths';
  info: {
    displayName: 'ourGrowth';
  };
  attributes: {
    usernumber: Schema.Attribute.Integer;
    year: Schema.Attribute.String;
  };
}

export interface AboutStrengthItem extends Struct.ComponentSchema {
  collectionName: 'components_about_strength_items';
  info: {
    displayName: 'Strength Item';
  };
  attributes: {
    label: Schema.Attribute.String;
    percentage: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 10;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.our-growth': AboutOurGrowth;
      'about.strength-item': AboutStrengthItem;
    }
  }
}
