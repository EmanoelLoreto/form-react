import { React, useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import './Form.css';

export default function RegisterForm({ sendForm, changeForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>Cadastro para login</h1>
      <form
        className="register-form"
        onSubmit={(event) => {
          event.preventDefault();
          sendForm({ email, password });
          changeForm(1);
        }}
      >
        <TextField
          type="email"
          name="email"
          id="email"
          label="E-mail"
          variant="outlined"
          margin="dense"
          required
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <TextField
          type="password"
          name="password"
          id="password"
          label="Senha"
          variant="outlined"
          margin="dense"
          required
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
        >Próximo</Button>
      </form>
    </>
  )
}