import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header';
import { Estate } from '../components/Estate/estate';

const stranka = window.location.pathname 
const apiURL = `https://apps.kodim.cz/daweb/trening-api/apis/realitka/${stranka.split('/').pop().replace('.html', '')}`
const response = await fetch(apiURL)
const data = await response.json() 

document.querySelector('#root').innerHTML = render(
  <>
    <Header />
    <Estate title={data.title} popis={data.text} cena={data.price} mesto={data.city} obrazek={data.photo} 
      jmeno={data.contact.name} posta={data.contact.email} cislo={data.contact.phone}/>
  </>
);
