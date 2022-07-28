import Head from 'next/head'
import Link from 'next/link'
import React,{useState, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, CardTitle, CardText } from 'reactstrap';

export default function Home(){

  const HeadData = () =>{
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
      
    </Container>
  
  </>
}