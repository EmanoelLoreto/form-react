import { React, useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import ViaCep from 'react-via-cep';

import './Form.css';

export default function DeliveryForm({ sendForm, changeForm }) {
  const [cep, setCep] = useState('');
  const [validCep, setValidCep] = useState({});

  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [andress, setAndress] = useState('');
  const [district, setDistrict] = useState('');
  const [complement, setComplement] = useState('');
  
  function updateAndress(data) {
    setCountry(data.uf);
    setCity(data.localidade);
    setAndress(data.logradouro);
    setDistrict(data.bairro);
  }

  return (
    <>
      <h1>Endereço</h1>
      <form
        className="register-form"
        onSubmit={(event) => {
          event.preventDefault();
          sendForm({ cep, country, city, andress, district, complement });
          changeForm(3);
        }}
      >
        <ViaCep cep={cep} lazy>
          {({ data, fetch }) => {
            if (data) {
              updateAndress(data);
            }
            return (
              <TextField
                type="number"
                name="cep"
                id="cep"
                label="Cep"
                variant="outlined"
                margin="dense"
                required
                error={validCep.isValid}
                helperText={validCep.helperText}
                value={cep}
                onChange={event => setCep(event.target.value)}
                onBlur={(event) => {
                  if (event.target.value.length === 8) {
                    fetch();
                    setValidCep({
                      isValid: false,
                      helperText: '',
                    })
                  } else {
                    setValidCep({
                      isValid: true,
                      helperText: 'O CEP deve conter 8 digitos.',
                    });
                  }
                }}
              />
            )
          }}
        </ViaCep>

        <TextField
          type="text"
          name="country"
          id="country"
          label="Estado"
          variant="outlined"
          margin="dense"
          value={country}
          onChange={event => setCountry(event.target.value)}
        />

        <TextField
          type="text"
          name="city"
          id="city"
          label="Cidade"
          variant="outlined"
          margin="dense"
          value={city}
          onChange={event => setCity(event.target.value)}
        />
        
        <TextField
          type="text"
          name="andress"
          id="andress"
          label="Endereço"
          variant="outlined"
          margin="dense"
          required
          value={andress}
          onChange={event => setAndress(event.target.value)}
        />

        <TextField
          type="text"
          name="district"
          id="district"
          label="Bairro"
          variant="outlined"
          margin="dense"
          value={district}
          onChange={event => setDistrict(event.target.value)}
        />

        <TextField
          type="text"
          name="complement"
          id="complement"
          label="Complemento"
          variant="outlined"
          margin="dense"
          value={complement}
          onChange={event => setComplement(event.target.value)}
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
        >Finalizar Cadastro</Button>
      </form>
    </>
  )
}
