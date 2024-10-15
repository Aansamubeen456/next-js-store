import React from 'react';
import { faker } from '@faker-js/faker';
import FormInput from '@/components/form/FormInput';
import FormContainer from '@/components/form/FormContainer';
import { createProdcutAction } from '@/utils/actions';
import ImageInput from '@/components/form/ImageInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import CheckBoxInput from '@/components/form/CheckBoxInput';
import SubmitButton from '@/components/form/Buttons';

function createProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section>
      <h1
        className="text-2xl capitalize font-semibold mb-8
       "
      >
        create product
      </h1>
      <div className="rounded-md p-8 border">
        <FormContainer action={createProdcutAction}>
          <div className="grid gap-4 my-4 md:grid-cols-2">
            {/* product name input */}
            <FormInput
              type="text"
              name="name"
              defaultValue={name}
              label="product name"
            />
            {/* product name input */}
            <FormInput
              type="text"
              name="company"
              defaultValue={company}
              label="company"
            />
            {/* product price and image */}
            <PriceInput />
            <ImageInput />
          </div>
          {/* description */}
          <TextAreaInput
            name="description"
            label="product description"
            defaultValue={description}
          />

          {/* featured product */}
          <div className="mt-6">
            <CheckBoxInput name="featured" label="featured product" />
          </div>
          {/* submit product */}
          <SubmitButton text="create product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}

export default createProductPage;
