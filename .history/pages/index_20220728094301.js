import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, CardTitle, CardText } from 'reactstrap';

export default function Home() {

  const HeadData = () => {
    return <Head>
      <title>Home</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content='Homepage' />
      <meta name='keywords' content='Homepage' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  }

  return <>
    <HeadData />
    <Container>
      <br />
      <br />
      <CardTitle tag='h5'>
        Mis imagenes
      </CardTitle>
      <br />
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing
      </p>
      <br />

      <CardText style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
        {`Crea tu propia cuenta para pdoer almacenar tus fotos \no accede si ya tienes cuenta.`}
      </CardText>
      <br />

      <div style={{ textAlign: 'center' }}>
        <Link href="/user_app/?loginType=login">
          <div style={{ display: 'inline-block' }}>
            <Button color='prymary' outline>
              Iniciar Sesion
            </Button>

          </div>
        </Link>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Link href="/user_app/?loginType=registrer">
          <div style={{ display: 'inline-block' }}>
            <Button color='prymary' outline>
              Registrarse
            </Button>
          </div>
        </Link>
      </div>
      <br />
      <br />

      <Card body style={{ boxShadow: '0px 0px 10px 0px #00000055'}}>
      <CardTitle tag='h5'>
        BLOG
      </CardTitle>
      <CardText>
        Conoce las historias que compartes los creadores...
      </CardText>
      <Link href='/blog'>
        <div>
          <Button>
            Ir al BLog</>
          </Button>
        </div>
      </Link>
      </Card>
    </Container>

  </>
}