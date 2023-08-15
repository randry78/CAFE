import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { GiCoffeeCup } from "react-icons/gi";
import { MdHome } from "react-icons/md";

export default function Navigation() {
  return (
    <Breadcrumb className='mx-4 my-4'>
        <Breadcrumb.Item className='ms-4 border-0'><MdHome className=' me-1 fs-4' />Accueil</Breadcrumb.Item>
        <Breadcrumb.Item ><GiCoffeeCup className="me-1 fs-4"/>Produits</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}