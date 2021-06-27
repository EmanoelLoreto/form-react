import { React, useEffect, useState } from 'react';

import DataUserForm from './DataUserForm.jsx';
import RegisterForm from './RegisterForm.jsx';
import DeliveryForm from './DeliveryForm.jsx';

import './Form.css'

import { Stepper, Step, StepLabel} from '@material-ui/core';

export default function Form() {
  const [stage, setStage] = useState(0);
  const [dataForm, setDataForm] = useState({});

  useEffect(() => {
    console.log(dataForm)
  })

  function sendForm(data) {
    setDataForm({...dataForm, ...data})
  }

  function changeForm(stage) {
    setStage(stage)
  }

  const forms = [
    <RegisterForm changeForm={changeForm} sendForm={sendForm} />,
    <DataUserForm changeForm={changeForm} sendForm={sendForm} />,
    <DeliveryForm changeForm={changeForm} sendForm={sendForm} />,
    <>
      <h1>Formulário enviado.</h1>
      <span>
        {
        Object.keys(dataForm).map((key, index) => (
          <p key={index}>
            <span>{key}: {dataForm[key] === true 
              ? 'true' : dataForm[key]
              ? dataForm[key] : 'false'}
            </span>
          </p>
        ))
      }
      </span>
    </>
  ]

  return (
    <>
      <Stepper activeStep={stage}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Dados pessoais</StepLabel></Step>
        <Step><StepLabel>Dados de endereço</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {forms[stage]}
    </>
  )
}
