import React, { useState } from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/lib/images';
import InputMask from 'react-input-mask';

const ERROR_MESSAGES = {
  emptyCardNumber: 'El número de la tarjeta es inválido',
  invalidCardNumber: 'El número de la tarjeta es inválido',
  emptyExpiryDate: 'La fecha de expiración es inválida',
  monthOutOfRange: 'El mes de expiración debe estar entre 01 y 12',
  yearOutOfRange: 'El año de expiración no puede estar en el pasado',
  dateOutOfRange: 'La fecha de expiración no puede estar en el pasado',
  invalidExpiryDate: 'La fecha de expiración es inválida',
  emptyCVC: 'El código de seguridad es inválido',
  invalidCVC: 'El código de seguridad es inválido'
};

const CreditCard = () => {
  const [card, setCard] = useState('');
  const [exp, setExp] = useState('');
  const [cvc, setCvc] = useState('');

  // Credit card masks for diff types
  let mask = '9999 9999 9999 9999';
  if (/^3[47]/.test(card)) mask = '9999 999999 99999';

  console.log(card, mask);

  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs({ errorMessages: ERROR_MESSAGES });

  const handleChange = e => setCard(e.target.value);

  return (
    <PaymentInputsWrapper {...wrapperProps}>
      <svg {...getCardImageProps({ images })} />
      {/* <input {...getCardNumberProps()} /> */}
      {/* <InputMask
        mask={mask}
        value={card}
        onChange={e => setCard(e.target.value)}
        //        {...getCardNumberProps()}
        alwaysShowMask={false}
        maskChar={null}
      >
        {inProps => <input {...inProps} />}
      </InputMask> */}
      <input {...getCardNumberProps({ onChange: handleChange })} value={card} />
      <input
        {...getExpiryDateProps({ onChange: e => setExp(e.target.value) })}
        value={exp}
      />
      <input
        {...getCVCProps({ onChange: e => setCvc(e.target.value) })}
        value={cvc}
      />
    </PaymentInputsWrapper>
  );
};

export default CreditCard;
