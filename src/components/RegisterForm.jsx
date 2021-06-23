import { React, useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

import { cpfMask } from '../lib/cpfMask';

import './RegisterForm.css';

export default function RegisterForm({ sendForm }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const [cpf, setCpf] = useState('');
  const [validCpf, setValidCpf] = useState({});

  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(false);

  return (
    <form
      className="register-form"
      onSubmit={(event) => {
        event.preventDefault();
        sendForm({ name, lastName, cpf, promotions, news });
      }}
    >
      <TextField
        type="text"
        name="name"
        id="name"
        label="Nome"
        variant="outlined"
        margin="dense"
        value={name}
        onChange={event => setName(event.target.value)}
      />

      <TextField
        className="text-field"
        type="text"
        name="lastname"
        id="lastname"
        label="Sobrenome"
        variant="outlined"
        margin="dense"
        value={lastName}
        onChange={event => setLastName(event.target.value)}
      />

      <TextField
        className="text-field"
        type="text"
        name="cpf"
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="dense"
        error={validCpf.isValid}
        helperText={validCpf.helperText}
        value={cpf}
        onChange={(event) => {
          setCpf(cpfMask(event.target.value));

          if (event.target.value.length >= 14) {
            setValidCpf({
              isValid: false,
              helperText: '',
            })
          }
        }}
        onBlur={(event) => {
          if (event.target.value.length < 14) {
            setValidCpf({
              isValid: true,
              helperText: 'O CPF deve conter 11 digitos.',
            })
          }
        }}
      />

      <div className="div-switch">
        <FormControlLabel
          control={
            <Switch
              color="primary"
              name="promotions"
              checked={promotions}
              onChange={event => setPromotions(event.target.checked)}
            />
          }
          label="Promoções"
        />

        <FormControlLabel
          control={
            <Switch
              color="primary"
              name="news"
              checked={news}
              onChange={event => setNews(event.target.checked)}
            />
          }
          label="Novidades"
        />
      </div>

      <Button
        type="submit"
        color="primary"
        variant="contained"
      >Registrar</Button>
    </form>
  )
}